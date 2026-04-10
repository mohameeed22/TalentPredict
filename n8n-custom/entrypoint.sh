#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== TalentPredict n8n + PDF Server Entrypoint ===${NC}"

# Function to wait for a service
wait_for_service() {
  local url=$1
  local max_attempts=30
  local attempt=0

  echo -e "${YELLOW}Waiting for $url...${NC}"
  while [ $attempt -lt $max_attempts ]; do
    if curl -s "$url" > /dev/null 2>&1; then
      echo -e "${GREEN}✓ Service available at $url${NC}"
      return 0
    fi
    attempt=$((attempt + 1))
    sleep 2
  done

  echo -e "${YELLOW}⚠ Service at $url may not be ready yet (continuing anyway)${NC}"
  return 1
}

# Start PDF server in background
echo -e "${GREEN}Starting PDF Extraction Server...${NC}"
cd /home/node/pdf-server
node pdf-server.js &
PDF_SERVER_PID=$!
echo -e "${GREEN}✓ PDF Server started (PID: $PDF_SERVER_PID)${NC}"

# Wait a moment for PDF server to be ready
sleep 3
if wait_for_service "http://localhost:3001/health"; then
  echo -e "${GREEN}✓ PDF Server is responding${NC}"
else
  echo -e "${YELLOW}⚠ PDF Server may still be starting${NC}"
fi

# Start n8n
echo -e "${GREEN}Starting n8n Server...${NC}"
cd /home/node

# Pass all arguments to n8n
exec n8n "$@"
