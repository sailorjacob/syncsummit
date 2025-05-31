#!/usr/bin/env python3
"""
Simple HTTP server with clean URL routing for SyncSummit
Allows accessing pages without .html extension
"""

import http.server
import socketserver
import os
from urllib.parse import urlparse

class CleanURLHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # Remove trailing slash
        if path.endswith('/') and len(path) > 1:
            path = path[:-1]
        
        # Check if the path exists as a file
        if os.path.exists('.' + path):
            return super().do_GET()
        
        # Try adding .html extension
        html_path = '.' + path + '.html'
        if os.path.exists(html_path):
            self.path = path + '.html'
            return super().do_GET()
        
        # Default behavior
        return super().do_GET()

    def end_headers(self):
        # Add CORS headers for Sanity integration
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def run_server(port=8080):
    with socketserver.TCPServer(("", port), CleanURLHTTPRequestHandler) as httpd:
        print(f"🚀 SyncSummit server running at http://localhost:{port}")
        print(f"📁 Serving files from: {os.getcwd()}")
        print("\n✨ Clean URLs enabled - access pages without .html extension")
        print("   Example: http://localhost:8080/courses")
        print("\nPress Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")

if __name__ == "__main__":
    run_server() 