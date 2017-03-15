SyntaxElementMorph.prototype.originalLabelPart = SyntaxElementMorph.prototype.labelPart;
SyntaxElementMorph.prototype.labelPart = function (spec) {
    var part, block = this;
    switch (spec) {
        case "%digitalPort":
            part = new InputSlotMorph(null, true, {
                "Port 1": 1,
                "Port 2": 2,
                "Port 3": 3,
                "Port 4": 4,
                "Port 5": 5,
                "Port 6": 6
            }, true);
            break;
        case "%analogPort":
            part = new InputSlotMorph(null, true, {
                "Port 3": 3,
                "Port 5": 5
            }, true);
            break;
        case "%ledPort":
            part = new InputSlotMorph(null, true, {
                "Port 1": 1,
                "Port 2": 2,
                "Port 3": 3,
                "Port 4": 4,
                "Port 5": 5,
                "Port 6": 6,
                "led on board": 13
            }, true);
            break;
        case "%RGBLed":
            part = new InputSlotMorph(null, false, {
                "All": ['All'],
                "First": ['First'],
                "Second": ['Second'],
                "Third": ['Third'],
                "Fourth": ['Fourth']
            }, true);
            break;
        case "%RGBColor":
            part = new InputSlotMorph(null, false, {
                "black": ['black'],
                "red": ['red'],
                "green": ['green'],
                "blue": ['blue'],
                "yellow": ['yellow'],
                "purple": ['purple'],
                "cyan": ['cyan'],
                "white": ['white']
            }, true);
            break;
        case "%motorPort":
            part = new InputSlotMorph(null, true, {
                "Port 7": 7,
                "Port 8": 8
            }, true);
            break;
        case "%buzzerTonality":
            part = new InputSlotMorph(null, false, {
                'C2': ['C2'],
                'D2': ['D2'],
                'E2': ['E2'],
                'F2': ['F2'],
                'G2': ['G2'],
                'A2': ['A2'],
                'B2': ['B2'],
                'C3': ['C3'],
                'D3': ['D3'],
                'E3': ['E3'],
                'F3': ['F3'],
                'G3': ['G3'],
                'A3': ['A3'],
                'B3': ['B3'],
                'C4': ['C4'],
                'D4': ['D4'],
                'E4': ['E4'],
                'F4': ['F4'],
                'G4': ['G4'],
                'A4': ['A4'],
                'B4': ['B4'],
                'C5': ['C5'],
                'D5': ['D5'],
                'E5': ['E5'],
                'F5': ['F5'],
                'G5': ['G5'],
                'A5': ['A5'],
                'B5': ['B5'],
                'C6': ['C6'],
                'D6': ['D6'],
                'E6': ['E6'],
                'F6': ['F6'],
                'G6': ['G6'],
                'A6': ['A6'],
                'B6': ['B6'],
                'C7': ['C7'],
                'D7': ['D7'],
                'E7': ['E7'],
                'F7': ['F7'],
                'G7': ['G7'],
                'A7': ['A7'],
                'B7': ['B7'],
                'C8': ['C8'],
                'D8': ['D8']
            }, true);
            break;
        case "%buzzerBeat":
            part = new InputSlotMorph(null, false, {
                'Half': ['Half'],
                'Quater': ['Quater'],
                'Eighth': ['Eighth'],
                'Whole': ['Whole'],
                'Double': ['Double'],
                'Zero': ['Zero']
            }, true);
            break;
        case "%temperaturePort":
            part = new InputSlotMorph(null, true, {
                "Port 3": 3,
                "Port 4": 4,
                "Port 5": 5,
                "Port 6": 6
            }, true);
            break;
        case "%humiture":
            part = new InputSlotMorph(null, false, {
                "humidity": ['humidity'],
                "temperature": ['temperature']
            }, true);
            break;
        case "%axis":
            part = new InputSlotMorph(null, false, {
                "X-Axis": ['X-Axis'],
                "Y-Axis": ['Y-Axis'],
                "Z-Axis": ['Z-Axis']
            }, true);
            break;
        case "%PM25Port":
            part = new InputSlotMorph(null, true, {
                'EPort 0': '0',
                'EPort 1': 1,
                'EPort 2': 2,
            }, true);
            break;
        case "%PM25":
            part = new InputSlotMorph(null, false, {
                'PM1.0': 'PM1.0',
                'PM2.5': 'PM2.5',
                'PM10': 'PM10',
            }, true);
            break;
        case "%airMonitors":
            part = new InputSlotMorph(null, false, {
                'PM2.5': 'PM2.5',
                'TVOC': 'TVOC',
            }, true);
            break;
        case "%digk":
            part = new InputSlotMorph(null, false, {
                'key 1': 'key1',
                'key 2': 'key2',
                'key 3': 'key3',
                'key 4': 'key4',
            }, true);
            break;
        case "%tkey":
            part = new InputSlotMorph(null, false, {
                'key 1': 'k1',
                'key 2': 'k2',
                'key 3': 'k3',
                'key 4': 'k4',
                'key 5': 'k5',
                'key 6': 'k6',
                'key 7': 'k7',
                'key 8': 'k8',
                'key 9': 'k9',
                'key 10': 'k10',
                'key 11': 'k11',
                'key 12': 'k12'
            }, true);
            break;
        case "%rfid":
            part = new InputSlotMorph(null, false, {
                'Rfid_start': ['Rfid_start'],
                'Rfid_execute': ['Rfid_execute'],
                'Rfid_forward': ['Rfid_forward'],
                'Rfid_backwards': ['Rfid_backwards'],
                'Rfid_left': ['Rfid_left'],
                'Rfid_right': ['Rfid_right'],
                'Rfid_stop': ['Rfid_stop'],
                'Rfid_clear': ['Rfid_clear'],
                'Rfid_red': ['Rfid_red'],
                'Rfid_green': ['Rfid_green'],
                'Rfid_blue': ['Rfid_blue'],
                'Rfid_yellow': ['Rfid_yellow'],
                'Rfid_delay1': ['Rfid_delay1'],
                'Rfid_delay2': ['Rfid_delay2'],
                'Rfid_delay5': ['Rfid_delay5'],
                'Rfid_buzzer': ['Rfid_buzzer'],
                'Rfid_IR': ['Rfid_IR'],
                'Rfid_ultrasonic': ['Rfid_ultrasonic']
            }, true);
            break;
        case "%setRotation":
            part = new InputSlotMorph(null, false, {
                'face_top': ['face_top'],
                'face_bottom': ['face_bottom'],
                'face_left': ['face_left'],
                'face_right': ['face_right']
            }, true);
            break;
        default:
            part = this.originalLabelPart(spec);
    }
    return part;
};

BlockMorph.prototype.userMenu = function () {
    var menu = new MenuMorph(this),
        world = this.world(),
        myself = this;
    menu.addItem("duplicate", function () {
        var dup = myself.fullCopy(), ide = myself.parentThatIsA(IDE_Morph);
        dup.pickUp(world);
        if (ide) {
            world.hand.grabOrigin = {
                origin: ide.palette,
                position: ide.palette.center()
            };
        }
    }, "make a copy\nand pick it up");
    if (this instanceof CommandBlockMorph && this.nextBlock()) {
        menu.addItem(this.thumbnail(.5, 60, false), function () {
            var cpy = this.fullCopy(), nb = cpy.nextBlock(), ide = myself.parentThatIsA(IDE_Morph);
            if (nb) {
                nb.destroy();
            }
            cpy.pickUp(world);
            if (ide) {
                world.hand.grabOrigin = {
                    origin: ide.palette,
                    position: ide.palette.center()
                };
            }
        }, "only duplicate this block");
    }
    menu.addItem("delete", "userDestroy");
    // if (StageMorph.prototype.enableCodeMapping && this.selector == "receiveGo") {
    //     menu.addLine();
    //     menu.addItem("export as Arduino sketch...", function () {
    //         IDE_Morph.prototype.transpile(myself.mappedCode())
    //     });
    // }
    if (this.parent instanceof ReporterSlotMorph || this.parent instanceof CommandSlotMorph || this instanceof HatBlockMorph || this instanceof CommandBlockMorph && this.topBlock() instanceof HatBlockMorph) {
        return menu;
    }
    return menu;
};

BlockMorph.prototype.mouseClickLeft = function () {
    if (this.category !== 'arduino') {
        var top = this.topBlock(),
            receiver = top.receiver(),
            shiftClicked = this.world().currentKey === 16,
            stage;
        if (shiftClicked && !this.isTemplate) {
            return this.focus();
        }
        if (top instanceof PrototypeHatBlockMorph) {
            return top.mouseClickLeft();
        }
        if (receiver) {
            stage = receiver.parentThatIsA(StageMorph);
            if (stage) {
                stage.threads.toggleProcess(top);
            }
        }
    }
}

InputSlotMorph.prototype.userMenu = function () { };

InputSlotMorph.prototype.mappedCode = function () {
    var block = this.parentThatIsA(BlockMorph),
        val = this.evaluate(),
        code;
    // console.log(this, val)
    switch (block.selector) {
        case 'reportMonadic':
            this.isReadOnly && (val = ({
                'abs': 'abs(', 'floor': 'floor(', 'sqrt': 'sqrt(', 'sin': 'sin(angle_rad*', 'cos': 'cos(angle_rad*', 'tan': 'tan(angle_rad*', 'asin': 'asin(angle_rad*',
                'acos': 'acos(angle_rad*', 'atan': 'atan(angle_rad*', 'ceiling': 'ceil(', 'ln': 'log(', 'log': 'log10(', 'e^': 'exp(', '10^': 'pow('
            }[val[0]] || val))
            break;
        case 'setDigitalPort':
            setupHeader.indexOf('KA_Port wdigital_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port wdigital_' + val + '(' + val + ');')
            break;
        case 'setAnalogPort':
            this.isReadOnly && (setupHeader.indexOf('KA_Port wanalog_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port wanalog_' + val + '(' + val + ');'))
            break;
        case 'setLed':
            setupHeader.indexOf('KA_Port LED_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port LED_' + val + '(' + val + ');')
            break;
        case 'setVibrator':
            setupHeader.indexOf('KA_Port Vibrator_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port Vibrator_' + val + '(' + val + ');')
            break;
        case 'setDigitron':
            this.isReadOnly && (setupHeader.indexOf('KA_Digitron digd_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Digitron digd_' + val + '(' + val + ');'))
            break;
        case 'setRGBLed':
            val = { 'All': '0', 'First': '1', 'Second': '2', 'Third': '3', 'Fourth': '4', 'black': '0', 'red': '63488', 'green': '2016', 'blue': '31', 'yellow': '65504', 'purple': '63519', 'cyan': '2047', 'white': '65535' }[val[0]]
                || (setupHeader.indexOf('KA_RGBLed rgbled_' + val + '(' + val + ', 256);') === -1 && setupHeader.push('KA_RGBLed rgbled_' + val + '(' + val + ', 256);'), val)
            break;
        case 'setServo':
            this.isReadOnly && (setupHeader.indexOf('KA_Servo servo_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Servo servo_' + val + '(' + val + ');'), bodyHeader.indexOf('servo_' + val + '.begin();') === -1 && bodyHeader.push('servo_' + val + '.begin();'))
            break;
        case 'setDCMotor':
            this.isReadOnly && (setupHeader.indexOf('KA_DCMotor motor_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_DCMotor motor_' + val + '(' + val + ');'))
            break;
        case 'setBuzzer':
            setupHeader.indexOf('KA_Buzzer buzzer;') === -1 && setupHeader.push('KA_Buzzer buzzer;')
            val = {
                C2: '65', D2: '73', E2: '82', F2: '87', G2: '98', A2: '110', B2: '123', C3: '131', D3: '147', E3: '165', F3: '175', G3: '196', A3: '220', B3: '247', C4: '262', D4: '294', E4: '330', F4: '349',
                G4: '392', A4: '440', B4: '494', C5: '523', D5: '587', E5: '659', F5: '698', G5: '784', A5: '880', B5: '988', C6: '1047', D6: '1175', E6: '1319', F6: '1397', G6: '1568', A6: '1760', B6: '1976',
                C7: '2093', D7: '2349', E7: '2637', F7: '2794', G7: '3136', A7: '3520', B7: '3951', C8: '4186', D8: '4699', Half: '500', Quater: '250', Eighth: '125', Whole: '1000', Double: '2000', Zero: '0'
            }[val[0]] || val;
            break;
        case 'setTimer':
            setupHeader.indexOf('double currentTime = 0;') === -1 && setupHeader.push('double currentTime = 0;', 'double lastTime = 0;')
            break;
        case 'aRead':
            setupHeader.indexOf('KA_Port avalues_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port avalues_' + val + '(' + val + ');')
            break;
        case 'lightsensor':
            setupHeader.indexOf('KA_Port lightsensor_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port lightsensor_' + val + '(' + val + ');')
            break;
        case 'soundsensor':
            setupHeader.indexOf('KA_Port soundsensor_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port soundsensor_' + val + '(' + val + ');')
            break;
        case 'shakesensor':
            setupHeader.indexOf('KA_Port shakesensor_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port shakesensor_' + val + '(' + val + ');')
            break;
        case 'pressuresensor':
            setupHeader.indexOf('KA_Port pressuresensor_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port pressuresensor_' + val + '(' + val + ');')
            break;
        case 'gassensor':
            setupHeader.indexOf('KA_Port gassensor_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port gassensor_' + val + '(' + val + ');')
            break;
        case 'flamesensor':
            setupHeader.indexOf('KA_Port flamesensor_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port flamesensor_' + val + '(' + val + ');')
            break;
        case 'tvocsensor':
            setupHeader.indexOf('KA_Port tvocsensor_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port tvocsensor_' + val + '(' + val + ');')
            break;
        case 'temperature':
            setupHeader.indexOf('KA_Temperature temperature_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Temperature temperature_' + val + '(' + val + ');')
            bodyHeader.indexOf('temperature_' + val + '.begin();') === -1 && bodyHeader.push('temperature_' + val + '.begin();')
            break;
        case 'humiditysensor':
            setupHeader.indexOf('KA_Port humiditysensor_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port humiditysensor_' + val + '(' + val + ');')
            break;
        case 'setHumiture':
            val = { 'humidity': '1', 'temperature': '2' }[val[0]]
                || (setupHeader.indexOf('KA_Humiture humiture_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Humiture humiture_' + val + '(' + val + ');'), bodyFooter.indexOf('humiture_' + val + '.update();') === -1 && bodyFooter.push('humiture_' + val + '.update();'), val)
            break;
        case 'ultrasonic':
            setupHeader.indexOf('KA_Ultrasonic ultrasonic_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Ultrasonic ultrasonic_' + val + '(' + val + ');')
            break;
        case 'setGyro':
            setupHeader.indexOf('KA_Gyro gyro;') === -1 && setupHeader.push('KA_Gyro gyro;')
            bodyHeader.indexOf('gyro.begin();') === -1 && bodyHeader.push('gyro.begin();')
            bodyFooter.indexOf('gyro.update();') === -1 && bodyFooter.push('gyro.update();')
            val = { 'X-Axis': '1', 'Y-Axis': '2', 'Z-Axis': '3' }[val[0]] || val
            break;
        case 'PM25':
            setupHeader.indexOf('KA_PM25 PM25;') === -1 && setupHeader.push('KA_PM25 PM25;')
            bodyFooter.indexOf('PM25.analysis();') === -1 && bodyFooter.push('PM25.analysis();')
            val = { 'PM1.0': '1', 'PM2.5': '2', 'PM10': '3' }[val]
                || (bodyHeader.indexOf('PM25.begin(' + val + ');') === -1 && bodyHeader.push('PM25.begin(' + val + ');'), val)
            break;
        case 'airMonitors':
            setupHeader.indexOf('KA_AirMonitors AirMonitors;') === -1 && setupHeader.push('KA_AirMonitors AirMonitors;')
            bodyFooter.indexOf('AirMonitors.analysis();') === -1 && bodyFooter.push('AirMonitors.analysis();')
            val = { 'PM2.5': '2', 'TVOC': '4' }[val]
                || (bodyHeader.indexOf('AirMonitors.begin(' + val + ');') === -1 && bodyHeader.push('AirMonitors.begin(' + val + ');'), val)
            break;
        case 'CO2':
            setupHeader.indexOf('KA_CO2 Co2;') === -1 && setupHeader.push('KA_CO2 Co2;')
            bodyHeader.indexOf('Co2.begin(' + val + ');') === -1 && bodyHeader.push('Co2.begin(' + val + ');')
            break;
        case 'setTimer':
            setupHeader.indexOf('long getLastTime(){return currentTime = millis()/1000.0 - lastTime;}') === -1
                && (setupHeader.indexOf('double currentTime = 0;') === -1 ? setupHeader.push('double currentTime = 0;', 'double lastTime = 0;', 'long getLastTime(){return currentTime = millis()/1000.0 - lastTime;}') : setupHeader.push('long getLastTime(){return currentTime = millis()/1000.0 - lastTime;}'))
            break;
        case 'dRead':
            setupHeader.indexOf('KA_Port dvalues_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port dvalues_' + val + '(' + val + ');')
            break;
        case 'linefollower':
            setupHeader.indexOf('KA_Port linefollower_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port linefollower_' + val + '(' + val + ');')
            break;
        case 'lsw':
            setupHeader.indexOf('KA_Port lsw_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port lsw_' + val + '(' + val + ');')
            break;
        case 'bsw':
            setupHeader.indexOf('KA_Port bsw_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port bsw_' + val + '(' + val + ');')
            break;
        case 'ssw':
            setupHeader.indexOf('KA_Port ssw_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port ssw_' + val + '(' + val + ');')
            break;
        case 'pir':
            setupHeader.indexOf('KA_Port pir_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Port pir_' + val + '(' + val + ');')
            break;
        case 'digk':
            val = { 'key1': '68', 'key2': '76', 'key3': '84', 'key4': '92' }[val]
                || (setupHeader.indexOf('KA_Digitron digk_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_Digitron digk_' + val + '(' + val + ');'), val)
            break;
        case 'touchKey':
            val = { 'k1': '1', 'k2': '2', 'k3': '3', 'k4': '4', 'k5': '5', 'k6': '6', 'k7': '7', 'k8': '8', 'k9': '9', 'k10': '10', 'k11': '11', 'k12': '12' }[val]
                || (setupHeader.indexOf('KA_TouchKey TouchKey_' + val + '(' + val + ');') === -1 && setupHeader.push('KA_TouchKey TouchKey_' + val + '(' + val + ');'), bodyFooter.indexOf('TouchKey_' + val + '.coding();') === -1 && bodyFooter.push('TouchKey_' + val + '.coding();'), val)
            break;
        case 'RFID':
            setupHeader.indexOf('KA_RFID rfid(2);') === -1 && setupHeader.push('KA_RFID rfid(2);')
            bodyHeader.indexOf('rfid.init();') === -1 && bodyHeader.push('rfid.init();')
            val = {
                'Rfid_start': '1', 'Rfid_execute': '2', 'Rfid_forward': '3', 'Rfid_backwards': '4', 'Rfid_left': '5', 'Rfid_right': '6', 'Rfid_stop': '7', 'Rfid_clear': '8', 'Rfid_red': '9',
                'Rfid_green': '10', 'Rfid_blue': '11', 'Rfid_yellow': '12', 'Rfid_delay1': '13', 'Rfid_delay2': '14', 'Rfid_delay5': '15', 'Rfid_buzzer': '16', 'Rfid_IR': '17', 'Rfid_ultrasonic': '18',
            }[val[0]] || val
            break;
        case 'fillScreen':
        case 'drawLine':
        case 'drawRect':
        case 'drawCircle':
        case 'drawTriangle':
        case 'fillRect':
        case 'fillCircle':
        case 'fillTriangle':
        case 'drawChar':
        case 'drawText':
            setupHeader.indexOf('KA_TFT Screen;') === -1 && setupHeader.push('KA_TFT Screen;')
            bodyHeader.indexOf('Screen.begin();') === -1 && bodyHeader.push('Screen.begin();')
            val = this.isReadOnly ? { 'black': '0', 'red': '63488', 'green': '2016', 'blue': '31', 'yellow': '65504', 'purple': '63519', 'cyan': '2047', 'white': '65535' }[val] || val : val
            break;
        case 'setRotation':
            setupHeader.indexOf('KA_TFT Screen;') === -1 && setupHeader.push('KA_TFT Screen;')
            bodyHeader.indexOf('Screen.begin();') === -1 && bodyHeader.push('Screen.begin();')
            val = { 'face_top': '1', 'face_bottom': '2', 'face_left': '3', 'face_right': '4' }[val[0]] || val
            break;
        default:
            break;
    }
    if (this.isNumeric) {
        code = StageMorph.prototype.codeMappings.number || '<#1>';
        return code.replace(/<#1>/g, val);
    }
    if (!isNaN(parseFloat(val))) { return val; }
    if (!isString(val)) { return val; }
    if (block && contains(['doSetVar', 'doChangeVar', 'doShowVar', 'doHideVar'], block.selector)) {
        return val;
    }
    if (block.selector === 'reportMonadic') {
        code = '<#1>';
    } else {
        code = StageMorph.prototype.codeMappings.string || '<#1>';
    }
    return code.replace(/<#1>/g, val);
};

BooleanSlotMorph.prototype.userMenu = function () { }

BooleanSlotMorph.prototype.mappedCode = function () {
    if (this.evaluate() === true) {
        return StageMorph.prototype.codeMappings.boolTrue || '(1)';
    }
    return StageMorph.prototype.codeMappings.boolFalse || '(0)';
};







