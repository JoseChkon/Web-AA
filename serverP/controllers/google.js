var passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
var userdb = require("../models/user.js")

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
},async function (accessToken, refreshToken, profile, done) {
    try {
        let user = await userdb.findOne({googleId: profile.id})

        if(!user){
            user = new userdb({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            })

            await user.save()
        }

        done(null, user)
    } catch (error) {
        done(null)
    }
}))

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})

