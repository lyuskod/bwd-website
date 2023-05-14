import { getShortWalletAddressRepresentation } from '../../scripts/address-helper'

export const handleCheck = async (file) => {
    const audit = {
        xingfeng: null,
    }

    if (!file)
        return { address: null, message: 'Please, choose a wallet to check' }

    const content = await file.text()
    const condition =
        file.name.endsWith('.dat') &&
        content.includes('ckey!') &&
        content.includes('name"') &&
        content.match(/name"\w+/)[0]
    if (!condition)
        return {
            address: null,
            message: 'File is not a bitcoin wallet file',
        }

    const address = await parseAddress(file)

    audit.xingfeng = await doesNotContain_XingFeng(file)
    return handleAudit(audit, address)
}

const parseAddress = async (file) => {
    const content = await file.text()
    return content
        .match(/name"\w+/)[0]
        .replace('name"', '')
        .trim()
}

const doesNotContain_XingFeng = async (file) => {
    const content = await file.text()
    return !content.includes('xingfeng')
}

const handleAudit = (audit, address) => {
    const validPercent = 99
    const availableChecks = Object.keys(audit).length
    const passedChecks = Object.values(audit).filter(
        (value) => value === true
    ).length
    const failedChecks = Object.values(audit).filter(
        (value) => value === false
    ).length
    const percentage = (passedChecks * validPercent) / availableChecks
    return {
        availableChecks,
        passedChecks,
        failedChecks,
        percentage,
        address,
        addressShort: getShortWalletAddressRepresentation(address),
        message: `Validity: ${percentage}%`,
    }
}
