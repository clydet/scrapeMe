#!/bin/bash
curl http://textbelt.com/text -d number=6086283938 -d "message=bv033 tickets are available!! 8/17/16 womens beach vb final"
mail -s "bv033 tickets are available! 8/17/16 womens bv final" fdstanford@hotmail.com < message.txt
