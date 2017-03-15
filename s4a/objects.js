// init decorator
SpriteMorph.prototype.originalInit = SpriteMorph.prototype.init;

SpriteMorph.prototype.init = function (globals) {
    this.originalInit(globals);
    // this.arduino = new Arduino(this);
};

// Definition of a new Arduino Category
SpriteMorph.prototype.categories.push("arduino");

SpriteMorph.prototype.blockColor["arduino"] = new Color(219, 66, 136);

SpriteMorph.prototype.originalInitBlocks = SpriteMorph.prototype.initBlocks;

SpriteMorph.prototype.initArduinoBlocks = function () {
    this.blocks.setDigitalPort = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Set digital port %digitalPort as %bool",
        defaults: [1, true],
        transpilable: true
    };
    this.blocks.setAnalogPort = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Set analog port %analogPort as %n",
        defaults: [3, 0],
        transpilable: true
    };
    this.blocks.setLed = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Set led port %ledPort as %bool",
        defaults: [1, true],
        transpilable: true
    };
    this.blocks.setVibrator = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Set vibrator port %digitalPort as %bool",
        defaults: [1, true],
        transpilable: true
    };
    this.blocks.setDigitron = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Set digitron display port %digitalPort number %n",
        defaults: [1, 0],
        transpilable: true
    };
    this.blocks.setRGBLed = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Set RGB port %digitalPort %RGBLed color is %RGBColor",
        defaults: [1, 'All', 'black'],
        transpilable: true
    };
    this.blocks.setServo = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Set servo port %digitalPort angle %n",
        defaults: [1, 0],
        transpilable: true
    };
    this.blocks.setDCMotor = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Set motor port %motorPort speed %n",
        defaults: [1, 0],
        transpilable: true
    };
    this.blocks.setBuzzer = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Play buzzer on tonality %buzzerTonality beat %buzzerBeat",
        defaults: ['C4', 'Half'],
        transpilable: true
    };
    this.blocks.setTimer = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Reset timer",
        transpilable: true
    };
    this.blocks.aRead = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Read analog values port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.lightsensor = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Light sensor port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.soundsensor = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Sound sensor port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.shakesensor = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Shake sensor port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.pressuresensor = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Pressure sensor port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.gassensor = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Gas sensor port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.flamesensor = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Flame sensor port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.tvocsensor = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "TVOC sensor port %digitalPort ppm",
        defaults: [1],
        transpilable: true
    };
    this.blocks.temperature = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Temperature sensor port %temperaturePort",
        defaults: [3],
        transpilable: true
    };
    this.blocks.humiditysensor = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Humidity sensor port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.setHumiture = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Humiture sensor port %temperaturePort %humiture",
        defaults: [3, 'humidity'],
        transpilable: true
    };
    this.blocks.ultrasonic = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Ultrasonic sensor port %temperaturePort distance",
        defaults: [3],
        transpilable: true
    };
    this.blocks.setGyro = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Gyro_3-axis %axis angle port %temperaturePort",
        defaults: ['X-Axis', 3],
        transpilable: true
    };
    this.blocks.PM25 = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "PM25 sensor port %PM25Port %PM25",
        defaults: [0, 'PM1.0'],
        transpilable: true
    };
    this.blocks.airMonitors = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Air Monitors sensor port %PM25Port %airMonitors",
        defaults: [0, 'PM2.5'],
        transpilable: true
    };
    this.blocks.CO2 = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "CO2 sensor port %PM25Port",
        defaults: [0],
        transpilable: true
    };
    this.blocks.aTimer = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Timer",
        transpilable: true
    };
    this.blocks.dRead = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Read digital values port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.linefollower = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Line follower port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.lsw = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Limit switch port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.bsw = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Button switch port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.ssw = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Selfhold switch port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.pir = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Person Infrared motion port %digitalPort",
        defaults: [1],
        transpilable: true
    };
    this.blocks.digk = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "Key %digk pressed port %digitalPort",
        defaults: ['key1', 1],
        transpilable: true
    };
    this.blocks.touchKey = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "TouchKey %tkey pressed port %digitalPort",
        defaults: ['k1', 1],
        transpilable: true
    };
    this.blocks.RFID = {
        only: SpriteMorph,
        type: "reporter",
        category: "arduino",
        spec: "RFID card id %rfid",
        defaults: ['Rfid_start'],
        transpilable: true
    };
    this.blocks.setHigh = {
        only: SpriteMorph,
        type: "predicate",
        category: "arduino",
        spec: "HIGH",
        transpilable: true
    };
    this.blocks.setLow = {
        only: SpriteMorph,
        type: "predicate",
        category: "arduino",
        spec: "LOW",
        transpilable: true
    };
    this.blocks.setOn = {
        only: SpriteMorph,
        type: "predicate",
        category: "arduino",
        spec: "ON",
        transpilable: true
    };
    this.blocks.setOff = {
        only: SpriteMorph,
        type: "predicate",
        category: "arduino",
        spec: "OFF",
        transpilable: true
    };
    this.blocks.fillScreen = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "FillScreen color %RGBColor",
        defaults: ['black'],
        transpilable: true
    };
    this.blocks.drawLine = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "DrawLine x %n y %n x %n y %n color %RGBColor",
        defaults: [3, 2, 3, 2, 'black'],
        transpilable: true
    };
    this.blocks.drawRect = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "DrawRect x %n y %n w %n h %n color %RGBColor",
        defaults: [3, 2, 3, 2, 'black'],
        transpilable: true
    };
    this.blocks.drawCircle = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "DrawCircle x %n y %n r %n color %RGBColor",
        defaults: [3, 2, 3, 'black'],
        transpilable: true
    };
    this.blocks.drawTriangle = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "DrawTriangle x %n y %n x %n y %n x %n y %n color %RGBColor",
        defaults: [3, 2, 3, 2, 3, 2, 'black'],
        transpilable: true
    };
    this.blocks.fillRect = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "FillRect x %n y %n w %n h %n color %RGBColor",
        defaults: [3, 2, 3, 2, 'black'],
        transpilable: true
    };
    this.blocks.fillCircle = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "FillCircle x %n y %n r %n color %RGBColor",
        defaults: [3, 2, 3, 'black'],
        transpilable: true
    };
    this.blocks.fillTriangle = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "FillTriangle x %n y %n x %n y %n x %n y %n color %RGBColor",
        defaults: [3, 2, 3, 2, 3, 2, 'black'],
        transpilable: true
    };
    this.blocks.drawChar = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "DrawChar x %n y %n size %n color %RGBColor bg %RGBColor c %n",
        defaults: [3, 2, 2, 'black', 'black', 49],
        transpilable: true
    };
    this.blocks.drawText = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "Text x %n y %n size %n color %RGBColor bg %RGBColor s %s",
        defaults: [3, 2, 2, 'black', 'black', 'Kadapapa'],
        transpilable: true
    };
    this.blocks.setRotation = {
        only: SpriteMorph,
        type: "command",
        category: "arduino",
        spec: "SetRotation %setRotation",
        defaults: ['face_top'],
        transpilable: true
    };

    this.blocks.receiveGo.transpilable = true;
    this.blocks.doWait.transpilable = true;
    this.blocks.doWaitUntil.transpilable = true;
    this.blocks.doForever.transpilable = true;
    this.blocks.doRepeat.transpilable = true;
    this.blocks.doUntil.transpilable = true;
    this.blocks.doIf.transpilable = true;
    this.blocks.doIfElse.transpilable = true;
    this.blocks.reportSum.transpilable = true;
    this.blocks.reportDifference.transpilable = true;
    this.blocks.reportProduct.transpilable = true;
    this.blocks.reportQuotient.transpilable = true;
    this.blocks.reportModulus.transpilable = true;
    this.blocks.reportRound.transpilable = true;
    this.blocks.reportMonadic.transpilable = true;
    this.blocks.reportRandom.transpilable = true;
    this.blocks.reportLessThan.transpilable = true;
    this.blocks.reportEquals.transpilable = true;
    this.blocks.reportGreaterThan.transpilable = true;
    this.blocks.reportAnd.transpilable = true;
    this.blocks.reportOr.transpilable = true;
    this.blocks.reportNot.transpilable = true;
    this.blocks.reportBoolean.transpilable = true;

    StageMorph.prototype.codeMappings["delim"] = ",";
    StageMorph.prototype.codeMappings["tempvars_delim"] = ", ";
    StageMorph.prototype.codeMappings["string"] = '"<#1>"';
    StageMorph.prototype.codeMappings["receiveGo"] = "void setup() {";
    StageMorph.prototype.codeHeaders["receiveGo"] = '#include <Arduino.h>\n#include "KA_Block.h"\n';
    StageMorph.prototype.codeMappings["doWait"] = "  delay(<#1> * 1000);";
    StageMorph.prototype.codeMappings["doWaitUntil"] = "  while(!<#1>);";
    StageMorph.prototype.codeMappings["doForever"] = "}\n\nvoid loop() {\n  <#1>\n}";
    StageMorph.prototype.codeMappings["doRepeat"] = "  for (int i = 0; i < <#1>; i++) {\n  <#2>\n  }";
    StageMorph.prototype.codeMappings["doUntil"] = "  while(!<#1>){\n  <#2>\n  }";
    StageMorph.prototype.codeMappings["doIf"] = "  if (<#1>) {\n  <#2>\n}";
    StageMorph.prototype.codeMappings["doIfElse"] = "  if (<#1>) {\n  <#2>\n} else {\n  <#3>\n}";
    StageMorph.prototype.codeMappings["reportSum"] = "(<#1> + <#2>)";
    StageMorph.prototype.codeMappings["reportDifference"] = "(<#1> - <#2>)";
    StageMorph.prototype.codeMappings["reportProduct"] = "(<#1> * <#2>)";
    StageMorph.prototype.codeMappings["reportQuotient"] = "(<#1> / <#2>)";
    StageMorph.prototype.codeMappings["reportModulus"] = "fmod(<#1>, <#2>)";
    StageMorph.prototype.codeMappings["reportRound"] = "round(<#1>)";
    StageMorph.prototype.codeMappings["reportMonadic"] = "<#1><#2>)";
    StageMorph.prototype.codeMappings["reportRandom"] = "random(<#1>, <#2>)";
    StageMorph.prototype.codeMappings["reportLessThan"] = "(<#1> < <#2>)";
    StageMorph.prototype.codeMappings["reportEquals"] = "(<#1> == <#2>)";
    StageMorph.prototype.codeMappings["reportGreaterThan"] = "(<#1> > <#2>)";
    StageMorph.prototype.codeMappings["reportAnd"] = "(<#1> & <#2>)";
    StageMorph.prototype.codeMappings["reportOr"] = "(<#1> | <#2>)";
    StageMorph.prototype.codeMappings["reportNot"] = "!(<#1>)";
    StageMorph.prototype.codeMappings["reportBoolean"] = "<#1>";
    StageMorph.prototype.codeMappings["setDigitalPort"] = "  wdigital_<#1>.dWrite1(<#2>);";
    StageMorph.prototype.codeMappings["setAnalogPort"] = "  wanalog_<#1>.aWrite1(<#2>);";
    StageMorph.prototype.codeMappings["setLed"] = "  LED_<#1>.dWrite1(<#2>);";
    StageMorph.prototype.codeMappings["setVibrator"] = "  Vibrator_<#1>.dWrite1(<#2>);";
    StageMorph.prototype.codeMappings["setDigitron"] = "  digd_<#1>.display(<#2>);";
    StageMorph.prototype.codeHeaders["setDigitron"] = '#include "KA_Digitron.h"';
    StageMorph.prototype.codeMappings["setRGBLed"] = "  rgbled_<#1>.setColor(<#2>,<#3>);\n  rgbled_<#1>.show();";
    StageMorph.prototype.codeHeaders["setRGBLed"] = '#include "KA_RGBLed.h"';
    StageMorph.prototype.codeMappings["setServo"] = "  servo_<#1>.write(<#2>);";
    StageMorph.prototype.codeHeaders["setServo"] = '#include "KA_Servo.h"';
    StageMorph.prototype.codeMappings["setDCMotor"] = "  motor_<#1>.run(<#2>);";
    StageMorph.prototype.codeHeaders["setDCMotor"] = '#include "KA_DCMotor.h"';
    StageMorph.prototype.codeMappings["setBuzzer"] = "  buzzer.tone(<#1>,<#2>);";
    StageMorph.prototype.codeHeaders["setBuzzer"] = '#include "KA_Buzzer.h"';
    StageMorph.prototype.codeMappings["setTimer"] = "  lastTime = millis()/1000.0;";
    StageMorph.prototype.codeMappings["aRead"] = "avalues_<#1>.aRead2()";
    StageMorph.prototype.codeMappings["lightsensor"] = "lightsensor_<#1>.aRead2()";
    StageMorph.prototype.codeMappings["soundsensor"] = "soundsensor_<#1>.aRead2()";
    StageMorph.prototype.codeMappings["shakesensor"] = "shakesensor_<#1>.aRead2()";
    StageMorph.prototype.codeMappings["pressuresensor"] = "pressuresensor_<#1>.aRead2()";
    StageMorph.prototype.codeMappings["gassensor"] = "gassensor_<#1>.aRead2()";
    StageMorph.prototype.codeMappings["flamesensor"] = "flamesensor_<#1>.aRead2()";
    StageMorph.prototype.codeMappings["tvocsensor"] = "(float)tvocsensor_<#1>.aRead2()*5*15/1024";
    StageMorph.prototype.codeMappings["temperature"] = "temperature_<#1>.get_temp()";
    StageMorph.prototype.codeHeaders["temperature"] = '#include "KA_Temperature.h"';
    StageMorph.prototype.codeMappings["humiditysensor"] = "humiditysensor_<#1>.aRead2()";
    StageMorph.prototype.codeMappings["setHumiture"] = "humiture_<#1>.getValue(<#2>)";
    StageMorph.prototype.codeHeaders["setHumiture"] = '#include "KA_Humiture.h"';
    StageMorph.prototype.codeMappings["ultrasonic"] = "ultrasonic_<#1>.distanceCm(400)";
    StageMorph.prototype.codeHeaders["ultrasonic"] = '#include "KA_Ultrasonic.h"';
    StageMorph.prototype.codeMappings["setGyro"] = "gyro.getAngle(<#1>)";
    StageMorph.prototype.codeHeaders["setGyro"] = '#include "KA_Gyro.h"';
    StageMorph.prototype.codeMappings["PM25"] = "PM25.getValue(<#2>)";
    StageMorph.prototype.codeHeaders["PM25"] = '#include "KA_PM25.h"';
    StageMorph.prototype.codeMappings["airMonitors"] = "AirMonitors.getValue(<#2>)";
    StageMorph.prototype.codeHeaders["airMonitors"] = '#include "KA_AirMonitors.h"';
    StageMorph.prototype.codeMappings["CO2"] = "Co2.getValue(<#1>)";
    StageMorph.prototype.codeHeaders["CO2"] = '#include "KA_CO2.h"';
    StageMorph.prototype.codeMappings["aTimer"] = "getLastTime()";
    StageMorph.prototype.codeMappings["dRead"] = "dvalues_<#1>.dpRead1()";
    StageMorph.prototype.codeMappings["linefollower"] = "linefollower_<#1>.dpRead1()";
    StageMorph.prototype.codeMappings["lsw"] = "lsw_<#1>.dpRead1()";
    StageMorph.prototype.codeMappings["bsw"] = "bsw_<#1>.dpRead1()";
    StageMorph.prototype.codeMappings["ssw"] = "ssw_<#1>.dpRead1()";
    StageMorph.prototype.codeMappings["pir"] = "pir_<#1>.dpRead1()";
    StageMorph.prototype.codeMappings["digk"] = "digk_<#2>.getkey() == (<#1>)";
    StageMorph.prototype.codeHeaders["digk"] = '#include "KA_Digitron.h"';
    StageMorph.prototype.codeMappings["touchKey"] = "TouchKey_<#2>.getkey() == (<#1>)";
    StageMorph.prototype.codeHeaders["touchKey"] = '#include "KA_TouchKey.h"';
    StageMorph.prototype.codeMappings["RFID"] = "rfid.ReadAction() == <#1>";
    StageMorph.prototype.codeHeaders["RFID"] = '#include "KA_RFID.h"';
    StageMorph.prototype.codeMappings["setHigh"] = "1";
    StageMorph.prototype.codeMappings["setLow"] = "0";
    StageMorph.prototype.codeMappings["setOn"] = "1";
    StageMorph.prototype.codeMappings["setOff"] = "0";
    StageMorph.prototype.codeMappings["fillScreen"] = "Screen.fillScreen(<#1>);";
    StageMorph.prototype.codeHeaders["fillScreen"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["drawLine"] = "Screen.drawLine(<#1>,<#2>,<#3>,<#4>,<#5>);";
    StageMorph.prototype.codeHeaders["drawLine"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["drawRect"] = "Screen.drawRect(<#1>,<#2>,<#3>,<#4>,<#5>);";
    StageMorph.prototype.codeHeaders["drawRect"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["drawCircle"] = "Screen.drawCircle(<#1>,<#2>,<#3>,<#4>);";
    StageMorph.prototype.codeHeaders["drawCircle"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["drawTriangle"] = "Screen.drawTriangle(<#1>,<#2>,<#3>,<#4>,<#5>,<#6>);";
    StageMorph.prototype.codeHeaders["drawTriangle"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["fillRect"] = "Screen.fillRect(<#1>,<#2>,<#3>,<#4>,<#5>);";
    StageMorph.prototype.codeHeaders["fillRect"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["fillCircle"] = "Screen.fillCircle(<#1>,<#2>,<#3>,<#4>);";
    StageMorph.prototype.codeHeaders["fillCircle"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["fillTriangle"] = "Screen.fillTriangle(<#1>,<#2>,<#3>,<#4>,<#5>,<#6>);";
    StageMorph.prototype.codeHeaders["fillTriangle"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["drawChar"] = "Screen.drawChar(<#1>,<#2>,<#6>,<#4>,<#5>,<#3>);";
    StageMorph.prototype.codeHeaders["drawChar"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["drawText"] = 'Screen.text(<#1>,<#2>,<#3>,<#4>,<#5>,String(<#6>));';
    StageMorph.prototype.codeHeaders["drawText"] = '#include "KA_TFT.h"';
    StageMorph.prototype.codeMappings["setRotation"] = 'Screen.setRotation(<#1>);';
    StageMorph.prototype.codeHeaders["setRotation"] = '#include "KA_TFT.h"';
};

SpriteMorph.prototype.initBlocks = function () {
    this.originalInitBlocks();
    this.initArduinoBlocks();
};

SpriteMorph.prototype.initBlocks();

// blockTemplates decorator
SpriteMorph.prototype.originalBlockTemplates = SpriteMorph.prototype.blockTemplates;
SpriteMorph.prototype.blockTemplates = function (category) {
    var myself = this;
    var blocks = myself.originalBlockTemplates(category);
    function blockBySelector(selector) {
        if (StageMorph.prototype.hiddenPrimitives[selector]) {
            return null;
        }
        var newBlock = SpriteMorph.prototype.blockForSelector(selector, true);
        newBlock.isTemplate = true;
        return newBlock;
    }
    if (category === "arduino") {
        blocks.push(blockBySelector("setDigitalPort"));
        blocks.push(blockBySelector("setAnalogPort"));
        blocks.push(blockBySelector("setLed"));
        blocks.push(blockBySelector("setVibrator"));
        blocks.push(blockBySelector("setDigitron"));
        blocks.push(blockBySelector("setRGBLed"));
        blocks.push(blockBySelector("setServo"));
        blocks.push(blockBySelector("setDCMotor"));
        blocks.push(blockBySelector("setBuzzer"));
        blocks.push(blockBySelector("setTimer"));
        blocks.push("=");
        blocks.push(blockBySelector("aRead"));
        blocks.push(blockBySelector("lightsensor"));
        blocks.push(blockBySelector("soundsensor"));
        blocks.push(blockBySelector("shakesensor"));
        blocks.push(blockBySelector("pressuresensor"));
        blocks.push(blockBySelector("gassensor"));
        blocks.push(blockBySelector("flamesensor"));
        blocks.push(blockBySelector("tvocsensor"));
        blocks.push(blockBySelector("temperature"));
        blocks.push(blockBySelector("humiditysensor"));
        blocks.push(blockBySelector("setHumiture"));
        blocks.push(blockBySelector("ultrasonic"));
        blocks.push(blockBySelector("setGyro"));
        blocks.push(blockBySelector("PM25"));
        blocks.push(blockBySelector("airMonitors"));
        blocks.push(blockBySelector("CO2"));
        blocks.push(blockBySelector("aTimer"));
        blocks.push("=");
        blocks.push(blockBySelector("dRead"));
        blocks.push(blockBySelector("linefollower"));
        blocks.push(blockBySelector("lsw"));
        blocks.push(blockBySelector("bsw"));
        blocks.push(blockBySelector("ssw"));
        blocks.push(blockBySelector("pir"));
        blocks.push(blockBySelector("digk"));
        blocks.push(blockBySelector("touchKey"));
        blocks.push(blockBySelector("RFID"));
        blocks.push(blockBySelector("setHigh"));
        blocks.push(blockBySelector("setLow"));
        blocks.push(blockBySelector("setOn"));
        blocks.push(blockBySelector("setOff"));
        blocks.push("=");
        blocks.push(blockBySelector("fillScreen"));
        blocks.push(blockBySelector("drawLine"));
        blocks.push(blockBySelector("drawRect"));
        blocks.push(blockBySelector("drawCircle"));
        blocks.push(blockBySelector("drawTriangle"));
        blocks.push(blockBySelector("fillRect"));
        blocks.push(blockBySelector("fillCircle"));
        blocks.push(blockBySelector("fillTriangle"));
        blocks.push(blockBySelector("drawChar"));
        blocks.push(blockBySelector("drawText"));
        blocks.push(blockBySelector("setRotation"));
    } else if (category === "other") {
        button = new PushButtonMorph(null, function () {
            var ide = myself.parentThatIsA(IDE_Morph), stage = myself.parentThatIsA(StageMorph);
            new BlockDialogMorph(null, function (definition) {
                if (definition.spec !== "") {
                    if (definition.isGlobal) {
                        stage.globalBlocks.push(definition);
                    } else {
                        myself.customBlocks.push(definition);
                    }
                    ide.flushPaletteCache();
                    ide.refreshPalette();
                    new BlockEditorMorph(definition, myself).popUp();
                }
            }, myself).prompt("Make a block", null, myself.world());
        }, "Make a block");
        //        button.userMenu = helpMenu;
        button.selector = "addCustomBlock";
        button.showHelp = BlockMorph.prototype.showHelp;
        blocks.push(button);
    }
    return blocks;
};

// Removing 'other' blocks from 'variables' category
SpriteMorph.prototype.freshPalette = function (category) {
    var palette = new ScrollFrameMorph(null, null, this.sliderColor), unit = SyntaxElementMorph.prototype.fontSize, x = 0, y = 5, ry = 0, blocks, hideNextSpace = false, myself = this, stage = this.parentThatIsA(StageMorph), oldFlag = Morph.prototype.trackChanges;
    Morph.prototype.trackChanges = false;
    palette.owner = this;
    palette.padding = unit / 2;
    palette.color = this.paletteColor;
    palette.growth = new Point(0, MorphicPreferences.scrollBarSize);
    // menu:
    palette.userMenu = function () {
        var menu = new MenuMorph(), ide = this.parentThatIsA(IDE_Morph), more = {
            operators: ["reifyScript", "reifyReporter", "reifyPredicate"],
            control: ["doWarp"],
            variables: ["doDeclareVariables", "reportNewList", "reportCONS", "reportListItem", "reportCDR", "reportListLength", "reportListContainsItem", "doAddToList", "doDeleteFromList", "doInsertInList", "doReplaceInList"]
        };
        return menu;
    };
    // primitives:
    blocks = this.blocksCache[category];
    if (!blocks) {
        blocks = myself.blockTemplates(category);
        if (this.isCachingPrimitives) {
            myself.blocksCache[category] = blocks;
        }
    }
    blocks.forEach(function (block) {
        if (block === null) {
            return;
        }
        if (block === "-") {
            if (hideNextSpace) {
                return;
            }
            y += unit * .8;
            hideNextSpace = true;
        } else if (block === "=") {
            if (hideNextSpace) {
                return;
            }
            y += unit * 1.6;
            hideNextSpace = true;
        } else if (block === "#") {
            x = 0;
            y = ry;
        } else {
            hideNextSpace = false;
            if (x === 0) {
                y += unit * .3;
            }
            block.setPosition(new Point(x, y));
            palette.addContents(block);
            if (block instanceof ToggleMorph || block instanceof RingMorph) {
                x = block.right() + unit / 2;
                ry = block.bottom();
            } else {
                // if (block.fixLayout) {block.fixLayout(); }
                x = 0;
                y += block.height();
            }
        }
    });
    // global custom blocks:
    if (stage) {
        y += unit * 1.6;
        stage.globalBlocks.forEach(function (definition) {
            var block;
            if (definition.category === category || category === "variables" && contains(["lists"], definition.category)) {
                block = definition.templateInstance();
                y += unit * .3;
                block.setPosition(new Point(x, y));
                palette.addContents(block);
                x = 0;
                y += block.height();
            }
        });
    }
    // local custom blocks:
    y += unit * 1.6;
    this.customBlocks.forEach(function (definition) {
        var block;
        if (definition.category === category || category === "variables" && contains(["lists"], definition.category)) {
            block = definition.templateInstance();
            y += unit * .3;
            block.setPosition(new Point(x, y));
            palette.addContents(block);
            x = 0;
            y += block.height();
        }
    });
    //layout
    palette.scrollX(palette.padding);
    palette.scrollY(palette.padding);
    Morph.prototype.trackChanges = oldFlag;
    return palette;
};


