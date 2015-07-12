#!/bin/bash
curl http://textbelt.com/text -d number=6086283938 -d "message=at014 tickets are available!! 8/19/16 mens 4x100m final"
mail -s "at014 tickets are available! 8/19/16 mens 4x100m final" fdstanford@hotmail.com < message.txt
