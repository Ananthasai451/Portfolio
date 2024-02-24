export const gmailIconClick = () => {
    const gamilUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=ananthasai420@gmail.com'
    window.open(gamilUrl, 'blank_')
}
export const phoneIconClick = (nonMobileCallback) => {
    function isMobile() {
        return /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouckstart' in window
    }
    const phoneUrl = 'tel:+919381470268'
    if (isMobile()) {
        window.open(phoneUrl, "blank_")
    }
    else {
        nonMobileCallback()
    }
}
export const linkedinIconClick = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/anantha-sai-avadhanam-b68817214'
    window.open(linkedinUrl, 'blank_')
}
export const githubIconClick = () => {
    const gitHubUrl = 'https://github.com/Ananthasai451'
    window.open(gitHubUrl, 'blank_')
}
export const resumeDownloadClick = () => {
    const pdfUrl = './resume.pdf'
    const a = document.createElement('a')
    a.href = pdfUrl
    a.download = 'AnanthaSaiA.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}