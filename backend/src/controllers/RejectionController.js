const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { booking_id } = req.params;

    const booking = await Booking.findById(booking_id).populate('spot');

    booking.approved = false;
    await booking.save();

    return res.json({ ok: true });
  },
};

// TODO: only spot owner should be allowed to approve or reject bookings
