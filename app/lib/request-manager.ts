// lib/request-manager.ts
'use client';

type RequestConfig = {
  url: string;
  options?: RequestInit;
};

class RequestManager {
  private pendingRequests = new Map<string, Promise<Response>>();
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  
  private generateKey(url: string, options?: RequestInit): string {
    return `${url}:${JSON.stringify(options || {})}`;
  }
  
  async fetch(url: string, options?: RequestInit, cacheTTL?: number): Promise<Response> {
    const key = this.generateKey(url, options);
    
    // Check cache first (for GET requests only)
    if (!options?.method || options.method === 'GET') {
      if (cacheTTL && this.cache.has(key)) {
        const cached = this.cache.get(key)!;
        if (Date.now() - cached.timestamp < cached.ttl) {
          // Return cached data as a mock Response
          return new Response(JSON.stringify(cached.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        } else {
          // Cache expired, remove it
          this.cache.delete(key);
        }
      }
    }
    
    // Check if request is already pending
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key)!;
    }
    
    const requestPromise = fetch(url, options);
    
    this.pendingRequests.set(key, requestPromise);
    
    try {
      const response = await requestPromise;
      
      // Cache successful GET responses
      if (cacheTTL && response.ok && (!options?.method || options.method === 'GET')) {
        try {
          const clone = response.clone();
          const data = await clone.json();
          this.cache.set(key, {
            data,
            timestamp: Date.now(),
            ttl: cacheTTL
          });
        } catch (e) {
          // Ignore caching errors for non-JSON responses
        }
      }
      
      return response;
    } finally {
      this.pendingRequests.delete(key);
    }
  }
  
  clearCache(pattern?: string): void {
    if (!pattern) {
      this.cache.clear();
      return;
    }
    
    const keysToDelete: string[] = [];
    Array.from(this.cache.keys()).forEach(key => {
      if (key.includes(pattern)) {
        keysToDelete.push(key);
      }
    });
    
    keysToDelete.forEach(key => this.cache.delete(key));
  }
  
  abort(pattern?: string): void {
    if (!pattern) {
      this.pendingRequests.clear();
      return;
    }
    
    const keysToDelete: string[] = [];
    Array.from(this.pendingRequests.keys()).forEach(key => {
      if (key.includes(pattern)) {
        keysToDelete.push(key);
      }
    });
    
    keysToDelete.forEach(key => this.pendingRequests.delete(key));
  }
  
  getPendingRequestsCount(): number {
    return this.pendingRequests.size;
  }
  
  getCacheSize(): number {
    return this.cache.size;
  }
  
  getStatus(): { pending: number; cached: number } {
    return {
      pending: this.getPendingRequestsCount(),
      cached: this.getCacheSize()
    };
  }
}

// Global singleton instance
export const requestManager = new RequestManager();
