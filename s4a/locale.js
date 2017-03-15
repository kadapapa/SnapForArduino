for (let l in SnapTranslator.dict) {
    if (['en', 'zh_CN'].indexOf(l) === -1) {
        delete SnapTranslator.dict[l]
    }
}