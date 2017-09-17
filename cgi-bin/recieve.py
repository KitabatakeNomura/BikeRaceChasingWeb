#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
import cgi
import sys

print "Content-Type: text/plain"
print ""

if os.environ['REQUEST_METHOD'] != 'POST':
    print 'invalid access.'
    sys.exit()

form = cgi.FieldStrage()

if not form.has_key('user'):
    print 'There is not user name.'
    sys.exit()

if not form.has_key('position'):
    print 'There is not position information.'
    sys.exit()

user = form['user'].value
position = form['position'].value

print "user : " + user
print "position : " + position

## DB ##
f = open("test.txt", "w")
txt = "user: " + user + ", position: " + position
f.write(txt)
f.close
## DB ##
