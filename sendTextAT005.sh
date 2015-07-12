#!/bin/bash
curl http://textbelt.com/text -d number=6086283938 -d "message=at005 tickets are available!! 8/14/16 mens 100m final"
mail -s "at005 tickets are available! 8/14/16 mens 100m final" fdstanford@hotmail.com < message.txt
