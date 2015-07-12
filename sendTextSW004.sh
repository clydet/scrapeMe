#!/bin/bash
curl http://textbelt.com/text -d number=6086283938 -d "message=sw004 tickets are available!! 8/7/16 mens 4x100m freestyle relay"
mail -s "sw004 tickets available, mens 4x100m relay 8/7/16" fdstanford@hotmail.com < message.txt
