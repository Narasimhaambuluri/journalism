const Therapist = require('../models/Resource');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./storage');


const token = localStorage.getItem('AUTH_TOKEN')

exports.getSearchPage = async (req, res) => {
    const info = {
        title: 'Search Therapists',
        description: 'Find a local therapist that suits your needs.',
        therapists: '',
        result:0,
        token: token
    };
    res.render('resources', info);
}

// Controller method to search for therapists
exports.searchTherapists = async (req, res) => {
    try {
        const { query } = req.query;

        // Define search criteria
        const searchCriteria = {
            $or: [
                { name: { $regex: query, $options: 'i' } }, 
                { specialization: { $regex: query, $options: 'i' } }, 
                { location: { $regex: query, $options: 'i' } } 
            ],
            available: true 
        };

        // Search for therapists based on the criteria
        const therapists = await Therapist.find(searchCriteria);

        // Send the result back to the client
        // res.json({ success: true, therapists });

        const info = {
            title: 'Results Therapists',
            description: 'Find a local therapist that suits your needs.',
            therapists: therapists,
            result:1,
            token: token
        };

        res.render('resources', info);
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};