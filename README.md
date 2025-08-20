# Lowry Mastermind Chess Competition

A chess competition registration website with admin dashboard.

## Files Structure

- `index.html` - Main landing page with countdown timer
- `register.html` - Registration form
- `admin.html` - Admin dashboard
- `styles.css` - Main stylesheet
- `firebase-config.js` - Firebase configuration
- `env.js` - Environment variables
- `netlify.toml` - Netlify deployment configuration
- `deploy-test.html` - Deployment testing page

## Deployment to Netlify

### Method 1: Drag & Drop
1. Zip all files in the `chess website` folder
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the zip file to deploy

### Method 2: Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build settings:
   - Build command: (leave empty)
   - Publish directory: `.`

### Method 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Troubleshooting

### Common Issues

1. **CSS not loading**: Check if `styles.css?v=3` is accessible
2. **Firebase errors**: Verify Firebase configuration in `env.js`
3. **Countdown not working**: Check browser console for JavaScript errors
4. **Admin access**: Username: `admin`, Password: `lowry@123`

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

## Admin Access

- **URL**: `/admin.html`
- **Username**: `admin`
- **Password**: `lowry@123`

## Support

For issues, check the error log in the admin panel or contact the development team.
