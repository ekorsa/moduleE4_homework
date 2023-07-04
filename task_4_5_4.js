class ElectricDevice {
  constructor(){
    this.currentStatus = 0
  }
  
  powerOff() {
    this.currentStatus = 0;
    console.log(`Disabled`)
  }
  
  powerOn() {
    this.currentStatus = 1;
    console.log(`Enabled`)
  }
  
  getPowerStatus() {
    console.log(`Current power status: ${this.currentStatus}`)
  }
    
}

class Laptop extends ElectricDevice {
  constructor(model, vendor){
    super()
    this.model = model,
    this.vendor = vendor
  }
  
  installOS(osName) {
      this.osName = osName,
      console.log(`${this.osName} was installed`)
  }
  
  getCurrentOS() {
    console.log(`Current OS ${this.osName}`)
  }
  
}


let iron = new ElectricDevice()

iron.getPowerStatus()
iron.powerOn()
iron.getPowerStatus()

let lenovo = new Laptop('Thinkpad','IBM')

lenovo.powerOn()
lenovo.getPowerStatus()
lenovo.installOS('Linux Ubuntu 22.04')
lenovo.getCurrentOS()
lenovo.installOS('Windows 11')
lenovo.getCurrentOS()
lenovo.powerOff()
lenovo.getCurrentOS()
