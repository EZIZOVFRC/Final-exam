
const { exam } = require("../models/exam.model")

const examController = {
    getAll: async (req, res) => {
        try {
            const items = await exam.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await exam.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newexam = new exam({ ...req.body })
            await newexam.save()
            const items = await exam.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await exam.findByIdAndDelete(id)
            const items = await exam.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await exam.findByIdAndUpdate(id, { ...req.body })
            const items = await exam.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { examController }
