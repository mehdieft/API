﻿using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;

namespace API.Controllers
{
    [ApiController]
    // " and ' are difference use " 
    [Route("/api/controller")]
    public class UsersController : ControllerBase

    {
        private readonly DataContext _dataContext;
        //this is dependency injection
        public UsersController(DataContext context)
        {
            _dataContext = context;

        }

        [HttpGet]
        public  ActionResult<IEnumerable<AppUser>> GetUsers()
        {
            //async method needs return method of awaits
            return  _dataContext.Users.ToList();

        }
        //we are trying to create async method api for better performance
        //if users visit  site become alot
        //public ActionResult <IEnumerable<AppUser>> getUsers()
        //{
        //    var users = _dataContext.Users.ToList();
        //    return users;
        //}
        [HttpGet("{id}")]
        public ActionResult<AppUser> getUser(int id)
        {
            return  _dataContext.Users.Find(id);
        }
    }
}