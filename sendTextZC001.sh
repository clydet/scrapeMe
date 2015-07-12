#!/bin/bash
curl http://textbelt.com/text -d number=6086283938 -d "message=ZC001 tickets are available!! 8/21/16 opening ceremony"
mail -s "closing ceremony tickets are available! 8/21/16" fdstanford@hotmail.com < message.txt
