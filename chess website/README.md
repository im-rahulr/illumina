# Lowry Mastermind Chess Competition

A website for the Lowry Mastermind Chess Competition. This website allows users to register for the competition and features an admin dashboard for managing registrations.

## Files Structure

- `index.html` - Main landing page with countdown timer
- `register.html` - Registration form
- `admin.html` - Admin dashboard
- `styles.css` - Main stylesheet
- `firebase-config.js` - Firebase configuration
- `env.js` - Environment variables
- `netlify.toml` - Netlify deployment configuration
- `deploy-test.html` - Deployment testing page

## Troubleshooting

### Common Issues

1. **CSS not loading**: Check if `styles.css?v=3` is accessible
2. **Firebase errors**: Verify Firebase configuration in `env.js`
3. **Countdown not working**: Check browser console for JavaScript errors

### Testing Deployment

Visit `/deploy-test.html` on your deployed site to run diagnostics.

### Cache Issues

If you see old content:
1. Clear browser cache
2. Add `?v=4` to CSS links
3. Check Netlify cache settings

## Features

- ✅ Responsive countdown timer
- ✅ Registration form with validation
- ✅ Admin dashboard with real-time data
- ✅ Firebase integration
- ✅ Error logging system
- ✅ Export functionality
- ✅ Mobile-friendly design

## Support

For issues, check the error log in the admin panel or contact the development team.
