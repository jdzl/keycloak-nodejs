

const token = async (req, res) => {

    res.status(200).json({
        token: '0xff1124'
    })

}
const getUser = async (req, res) => {

    res.status(200).json({
        username: 'jdzl',
        code: '0xff1124',
        active: true,
        
    })

}

module.exports = {
    token,
    getUser
}