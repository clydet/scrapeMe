#!/bin/bash
curl http://textbelt.com/text -d number=6086283938 -d "message=ZO001 tickets are available!! 8/5/16 opening ceremony"
mail -s "opening ceremony tickets are available! 8/5/16" fdstanford@hotmail.com < message.txt
