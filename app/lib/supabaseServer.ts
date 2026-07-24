/**
 * DEPRECATED: Supabase server integration has been fully migrated to our central production server / Cloudflare tunnel.
 * This file is retained as a compatibility stub.
 */

export const supabaseServer = {
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
    eq: function() { return this; },
    order: function() { return this; },
    limit: function() { return this; },
    single: function() { return Promise.resolve({ data: null, error: null }); }
  })
};
