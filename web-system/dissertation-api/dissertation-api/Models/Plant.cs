using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dissertation_api.Models
{
    public class Plant
    {
        public Plant(
            int plantID, 
            DateTime datetimeRecorded, 
            float leafTemp, 
            float ambientTemp, 
            float soilMoisture,
            float redStrength, 
            float greenStrength, 
            float blueStrength, 
            float lightnessStrength, 
            float greenMagentaStrength,
            float blueYellowStrength, 
            float hueStrength, 
            float saturationStrength, 
            float valueStrength)
        {
            this.plantID = plantID;
            this.datetimeRecorded = datetimeRecorded;
            this.leafTemp = leafTemp;
            this.ambientTemp = ambientTemp;
            this.soilMoisture = soilMoisture;
            this.redStrength = redStrength;
            this.greenStrength = greenStrength;
            this.blueStrength = blueStrength;
            this.lightnessStrength = lightnessStrength;
            this.greenMagentaStrength = greenMagentaStrength;
            this.blueYellowStrength = blueYellowStrength;
            this.hueStrength = hueStrength;
            this.saturationStrength = saturationStrength;
            this.valueStrength = valueStrength;
        }
        public int plantID { get; set; }

        public DateTime datetimeRecorded { get; set; }
        public float leafTemp { get; set; }
        public float ambientTemp { get; set; }
        public float soilMoisture { get; set; }
        public float redStrength { get; set; }
        public float greenStrength { get; set; }
        public float blueStrength { get; set; }
        public float lightnessStrength { get; set; }
        public float greenMagentaStrength { get; set; }
        public float blueYellowStrength { get; set; }
        public float hueStrength { get; set; }
        public float saturationStrength { get; set; }
        public float valueStrength { get; set; }
    }
}
