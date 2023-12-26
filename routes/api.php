<?php

use App\Http\Controllers\AttendanceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/upload-excel-attendance', [AttendanceController::class, 'uploadExcelAttendance']);
Route::get('/employees', [AttendanceController::class, 'getAllEmployees']);
Route::get('/employee-attendance/{id}', [AttendanceController::class, 'getEmployeeAttendance']);

