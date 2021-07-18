using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dissertation_api.Models
{
    public class Test
    {
        public Test(int id, int num)
        {
            this.id = id;
            this.number = num;
        }
        public int id { get; set; }
        public int number { get; set; }

        
    }
}
