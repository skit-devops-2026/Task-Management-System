#!/usr/bin/env bash

set -e

echo "Running Organizr tests..."

# Check important project files
test -f Index.html
test -f Home.html
test -f All_Tasks.html
test -f Makefile
test -f README.md

# Check important folders
test -d Script
test -d Style

# Check JavaScript files have valid syntax
for file in Script/*.js; do
    node --check "$file"
done

echo "All tests passed!"