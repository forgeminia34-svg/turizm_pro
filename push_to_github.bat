@echo off
title GitHub ga yuklash - SilkTour
echo ====================================================
echo  SilkTour loyihasini GitHub ga yuklash (Push)
echo  Akkaunt: forgeminia34-svg
echo  Repozitoriy: https://github.com/forgeminia34-svg/turizm_pro
echo ====================================================
echo.
cd /d "%~dp0"
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [MUVAFFAQIYAT] Loyiha GitHub ga muvaffaqiyatli yuklandi!
    echo Repozitoriy havolasi: https://github.com/forgeminia34-svg/turizm_pro
) else (
    echo [XATOLIK] Yuklash amalga oshmadi. Iltimos ochilgan brauzer oynasida GitHub hisobingizni tasdiqlang.
)
echo.
pause
