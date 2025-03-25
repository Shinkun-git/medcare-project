import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("Middleware running...");

  // Read the token directly from cookies
  const token = req.cookies.get("token")?.value;
  console.log("token:", token);
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login if not authenticated
  }

  return NextResponse.next(); // Allow access
}

// Apply middleware to protected routes
export const config = {
  matcher: ["/appointment1/:path*", "/booking/:path*"], // Define protected routes
};
