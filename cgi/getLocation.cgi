#!/usr/bin/python
# -*- coding: utf-8 -*-

import json
import pymysql.cursors

print 'Content-Type: application/json; charset=utf-8'
print

connection = pymysql.connect(
	host='172.17.0.2',
	user='root',
	password='mysql',
	db='bikegazer',
	charset='utf8',
	cursorclass=pymysql.cursors.DictCursor
)

locations = []

with connection.cursor() as cursor:
	# get race information
	race_id = 1
	
	# get race participants
	sql = 'select user_id from race_participants where race_id='+str(race_id)
	cursor.execute(sql)
	race_participants = cursor.fetchall()
	for user in race_participants:
		sql = 'select users.name,lat,lng from users inner join locations on users.id=locations.user_id where users.id='+str(user["user_id"])+' order by time desc limit 1'
		cursor.execute(sql)
		
		locations.append(cursor.fetchone())

connection.close()

print json.dumps(locations)
