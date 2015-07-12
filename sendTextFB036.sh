#!/bin/bash
curl http://textbelt.com/text -d number=6086283938 -d "message=fb036 tickets are available!! 8/19/16 womens soccer final"
mail -s "fb036 tickets are available! 8/19/16 womens soccer final" fdstanford@hotmail.com < message.txt
