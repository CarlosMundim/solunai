@echo off
cls
echo ========================================
echo      SOLUNAI PROFESSIONAL DEPLOYMENT
echo      by Boss Tiger - Nuclear Permissions
echo ========================================
echo.

echo [1/4] Checking Vercel CLI...
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing Vercel CLI...
    npm install -g vercel
)

echo [2/4] Navigating to project directory...
cd /D "C:\Solunai_Website"

echo [3/4] Deploying to production with FULL POWER...
vercel --prod

echo [4/4] Deployment complete!
echo.
echo ========================================
echo    SOLUNAI IS NOW LIVE! 
echo ========================================
echo.
echo Visit your Vercel dashboard to:
echo - Get your live URL
echo - Set up custom domain  
echo - View analytics
echo - Configure settings
echo.
echo Tiger's professional website is ready! 🐅
echo Papa Carlos will be proud!
echo.
pause