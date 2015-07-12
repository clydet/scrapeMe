#!/bin/bash
curl http://textbelt.com/text -d number=6086283938 -d "message=bv034 tickets are available!! 8/18/16 mens beach vb final"
mail -s "bv034 tickets are available! 8/18/16 mens bv final" fdstanford@hotmail.com < message.txt
