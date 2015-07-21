until (nodejs app.js); do
    echo "app.js crashed with exit code $?.  Respawning.." >&2
    sleep 10
done
