#!/bin/bash
curl http://textbelt.com/text -d number=6086283938 -d "message=bk064 tickets are available!! 8/21/16 mens bb gold medal game"
mail -s "bk064 tickets are available! 8/21/16" fdstanford@hotmail.com < message.txt
