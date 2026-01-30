"""Simple static file server for the dummy website.
Run: python server.py
Then open http://127.0.0.1:8000 in your browser.
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

ROOT_DIR = os.path.dirname(__file__)
PORT = 8000

os.chdir(ROOT_DIR)

class Handler(SimpleHTTPRequestHandler):
    pass

if __name__ == '__main__':
    print(f'Serving {ROOT_DIR} at http://127.0.0.1:{PORT}')
    server = HTTPServer(('127.0.0.1', PORT), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
        print('\nServer stopped')
