#!/bin/bash
# Memory Cleanup Script - Kill old Next.js zombie processes
# Created by Tiger for Carlos - Solunai Project

echo "🧹 Cleaning up old Next.js zombie processes..."
echo ""

# Count current processes
BEFORE=$(ps aux | grep -E "next-server|npm run dev" | grep -v grep | wc -l)
echo "📊 Found $BEFORE Next.js processes running"

# Kill old next-server processes (keep current working directory ones)
KILLED=0
for PID in $(ps aux | grep "next-server" | grep -v grep | awk '{print $2}'); do
    # Check if process is older than 2 hours
    START_TIME=$(ps -p $PID -o etimes= 2>/dev/null)
    if [ ! -z "$START_TIME" ] && [ "$START_TIME" -gt 7200 ]; then
        kill -9 $PID 2>/dev/null
        if [ $? -eq 0 ]; then
            ((KILLED++))
            echo "  ✅ Killed old process PID $PID (running for ${START_TIME}s)"
        fi
    fi
done

echo ""
echo "🎯 Killed $KILLED old zombie processes"

# Show memory status
echo ""
echo "💾 Memory Status:"
free -h | grep Mem

# Count remaining processes
AFTER=$(ps aux | grep -E "next-server|npm run dev" | grep -v grep | wc -l)
echo ""
echo "📊 Now running: $AFTER Next.js processes"
echo ""
echo "✅ Cleanup complete!"
