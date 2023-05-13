from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']

class TodoListView(APIView):

    def get(self, request):
        # Implement this method - return all todo items from db instance above.
        data = db['todo'].find({})
        Tasks_db = []
        for task in data:
            Tasks_db.append({"task " : task["task"]})

        return Response(Tasks_db, status=status.HTTP_200_OK)
        
    def post(self, request):
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        tasks = request.data
        if "task" in tasks:
            db['todo'].insertOne(tasks)
            return Response({"Task added"}, status=status.HTTP_200_OK)

        return Response({"Failed"})