"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function IceBreadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(segment => segment !== "");
  
  const generateBreadcrumbs = () => {
    let currentPath = "";
    return pathSegments.map((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Formatting the segment name for display
      const name = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return (
        <li key={currentPath} className="flex items-center">
          <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
          {isLast ? (
            <span className="text-brand-gold font-medium truncate max-w-[200px] md:max-w-none" aria-current="page">
              {name}
            </span>
          ) : (
            <Link 
              href={currentPath} 
              className="text-gray-400 hover:text-white transition-colors truncate max-w-[150px] md:max-w-none"
            >
              {name}
            </Link>
          )}
        </li>
      );
    });
  };

  return (
    <nav className="w-full bg-black/40 backdrop-blur-md border-b border-white/10 sticky top-[80px] z-40" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center h-12 text-sm">
          <li className="flex items-center">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
              <HomeIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Inicio</span>
            </Link>
          </li>
          {generateBreadcrumbs()}
        </ol>
      </div>
    </nav>
  );
}
