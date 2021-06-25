using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class NewPasswordModify
    {
        public string email { get; set; }
        public string token { get; set; }
        public string newpassword { get; set; }
    }
}