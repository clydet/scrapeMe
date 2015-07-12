#!/bin/bash
EVENT_CODE=$1
DATE=$2
MESSAGE="message=${EVENT_CODE} tickets are available!! ${DATE}"

curl http://textbelt.com/text -d number=6086283938 -d "${MESSAGE}"
mail -s "${MESSAGE}" fdstanford@hotmail.com < message.txt
