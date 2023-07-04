function ElectricDevice () {
 this.currentStatus = 0
   
}

ElectricDevice.prototype.powerOff = function() { 
  this.currentStatus = 0;
  console.log(`Disabled`);

}

ElectricDevice.prototype.powerOn = function() {
    this.currentStatus = 1;
    console.log(`Enabled`);

}

ElectricDevice.prototype.getPowerStatus = function() {
    console.log(`Current power status: ${this.currentStatus}`);

}

function Laptop(model, vendor) {
    this.model = model,
    this.vendor = vendor
}

Laptop.prototype = new ElectricDevice()

Laptop.prototype.installOS = function(osName){
      this.osName = osName,
      console.log(`${this.osName} was installed`)
}

Laptop.prototype.getCurrentOS = function(){
    console.log(`Current OS ${this.osName}`)
}

const iron = new ElectricDevice()

iron.getPowerStatus()
iron.powerOn()
iron.getPowerStatus()

const lenovo = new Laptop('Thinkpad','IBM')

lenovo.powerOn()
lenovo.getPowerStatus()
lenovo.installOS('Linux Ubuntu 22.04')
lenovo.getCurrentOS()
lenovo.installOS('Windows 11')
lenovo.getCurrentOS()
lenovo.powerOff()
lenovo.getCurrentOS()

