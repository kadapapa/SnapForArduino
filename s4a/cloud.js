const http = require('http')
const querystring = require('querystring')
const cloudUrl = ''
SnapCloud = new Cloud(cloudUrl)

Cloud.prototype.originalSignup = Cloud.prototype.signup;
Cloud.prototype.signup = function (username, email, callBack, errorCall) {
    let myself = this
    http.get(`${cloudUrl}/signup?username=${username}&email=${email}`, res => {
        if (res.statusCode === 200) {
            callBack('Success.')
        } else {
            errorCall.call(null, 'User name already exits, choose another user name.')
        }
    }).on('error', err => {
        errorCall.call(null, 'Connection failed.', 'Cloud')
    })
};

Cloud.prototype.originalLogin = Cloud.prototype.login;
Cloud.prototype.login = function (username, password, callBack, errorCall) {
    let myself = this
    http.get(`${cloudUrl}/login?username=${username}&password=${password}`, res => {
        if (res.statusCode === 200) {
            myself.username = username
            myself.password = password
            myself.session = res.headers['cookie']
            callBack()
        } else {
            errorCall.call(null, 'The username or password is incorrect.')
        }
    }).on('error', err => {
        errorCall.call(null, 'Connection failed.', 'Cloud')
    })
};

Cloud.prototype.originalChangePassword = Cloud.prototype.changePassword;
Cloud.prototype.changePassword = function (oldPW, newPW, callBack, errorCall) {
    let myself = this
    let { username } = querystring.parse(localStorage['-snap-user'])
    http.get(`${cloudUrl}/changePassword?username=${username || myself.username}&oldpassword=${hex_sha512(oldPW)}&newpassword=${hex_sha512(newPW)}`, res => {
        if (res.statusCode === 200) {
            callBack()
        } else {
            errorCall.call(null, 'Password not changed.')
        }
    }).on('error', err => {
        errorCall.call(null, 'Connection failed.', 'Cloud')
    })
}

Cloud.prototype.originalGetProjectList = Cloud.prototype.getProjectList;
Cloud.prototype.getProjectList = function (callBack, errorCall) {
    let myself = this
    if (!localStorage['-snap-user'] && !this.session) {
        errorCall.call(null, 'You are not connected.', 'Cloud');
        return;
    }
    let { username } = querystring.parse(localStorage['-snap-user'])
    http.get(`${cloudUrl}/getProjectList?username=${username || myself.username}`, res => {
        let rawData = '';
        res.on('data', chunk => rawData += chunk);
        res.on('end', () => {
            if (res.statusCode === 200) {
                callBack(JSON.parse(rawData))
            } else {
                errorCall.call(null, 'Unable to get the list of projects.')
            }
        });
    }).on('error', err => {
        errorCall.call(null, 'Connection failed.', 'Cloud')
    })
}

Cloud.prototype.getRawProject = function (projectName, callBack, errorCall) {
    let myself = this
    let { username } = querystring.parse(localStorage['-snap-user'])
    http.get(`${cloudUrl}/getProject?username=${username || myself.username}&projectname=${encodeURIComponent(projectName)}`, res => {
        let rawData = '';
        res.on('data', chunk => rawData += chunk);
        res.on('end', () => {
            if (res.statusCode === 200) {
                callBack(rawData)
            } else {
                errorCall.call(null, 'Unable to download project.')
            }
        });
    }).on('error', err => {
        errorCall.call(null, 'Connection failed.', 'Cloud')
    })
}

Cloud.prototype.deleteProject = function (projectName, callBack, errorCall) {
    let myself = this
    let { username } = querystring.parse(localStorage['-snap-user'])
    http.get(`${cloudUrl}/deleteProject?username=${username || myself.username}&projectname=${encodeURIComponent(projectName)}`, res => {
        if (res.statusCode === 200) {
            callBack()
        } else {
            errorCall.call(null, 'Delete failed')
        }
    }).on('error', err => {
        errorCall.call(null, 'Connection failed.', 'Cloud')
    })
}

Cloud.prototype.shareProject = function (projectName, callBack, errorCall) {
    let myself = this
    let { username } = querystring.parse(localStorage['-snap-user'])
    http.get(`${cloudUrl}/shareProject?username=${username || myself.username}&projectname=${encodeURIComponent(projectName)}`, res => {
        if (res.statusCode === 200) {
            callBack()
        } else {
            errorCall.call(null, 'Sharing failed.')
        }
    }).on('error', err => {
        errorCall.call(null, 'Connection failed.', 'Cloud')
    })
}

Cloud.prototype.unshareProject = function (projectName, callBack, errorCall) {
    let myself = this
    let { username } = querystring.parse(localStorage['-snap-user'])
    http.get(`${cloudUrl}/unshareProject?username=${username || myself.username}&projectname=${encodeURIComponent(projectName)}`, res => {
        let rawData = '';
        res.on('data', chunk => rawData += chunk);
        res.on('end', () => {
            if (res.statusCode === 200) {
                callBack()
            } else {
                errorCall.call(null, 'Failed to cancel sharing.')
            }
        });
    }).on('error', err => {
        errorCall.call(null, 'Connection failed.', 'Cloud')
    })
}

Cloud.prototype.originalSaveProject = Cloud.prototype.saveProject;
Cloud.prototype.saveProject = function (ide, callBack, errorCall) {
    let myself = this,
        str = ide.serializer.serialize(ide.stage),
        size = str.length,
        note = ide.projectNotes,
        thum = null
    if (size > 10485760) {
        new DialogBoxMorph().inform(
            'Cannot Save Project.',
            'Project exceeds 10 MB size limit.',
            ide.world(),
            ide.cloudIcon(null, new Color(180, 0, 0))
        );
        return;
    }

    try {
        thum = ide.serializer.parse(str).childNamed('thumbnail').contents;
    } catch (err) {
        ide.showMessage('Serialization of program data failed:\n' + err);
        return;
    }

    ide.showMessage('Uploading ' + Math.round(size / 1024) + ' KB...')

    let { username } = querystring.parse(localStorage['-snap-user'])
    let options = {
        hostname: '',
        port: ,
        path: `/saveProject?username=${username || myself.username}&projectname=${encodeURIComponent(ide.projectName)}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let req = http.request(options, res => {
        if (res.statusCode === 200) {
            callBack()
        } else {
            errorCall.call(null, 'Save failed.')
        }
    }).on('error', err => {
        errorCall.call(null, 'Connection failed.', 'Cloud')
    })
    req.end(JSON.stringify({ 'str': str, 'note': note, 'thum': thum }))
};

Cloud.prototype.originalEncodeDict = Cloud.prototype.encodeDict;
Cloud.prototype.encodeDict = function (dict) {
    if (!dict) { return null; }
    return querystring.stringify(dict)
};
