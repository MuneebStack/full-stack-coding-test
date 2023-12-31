<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileRequest;
use App\Models\Employee;
use App\src\AppHumanResources\Attendance\Application\AttendanceService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    protected $attendanceService;
    protected $perPage = 5;

    public function __construct(AttendanceService $attendanceService)
    {
        $this->attendanceService = $attendanceService;
    }

    public function uploadData(FileRequest $request): JsonResponse
    {
        $file = $request->file('file');

        try {
            $this->attendanceService->importDataFromExcelFile($file);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Error during import: ' . $th->getMessage()], 500);
        }

        return response()->json(['message' => 'The attendance data has been successfully imported']);
    }

    public function getAllEmployees(): JsonResponse
    {
        $employees = Employee::select('id', 'name', 'email')->paginate($this->perPage);;
        return response()->json($employees);
    }

    public function getEmployeeAttendance(Request $request, $employeeId)
    {
        try {
            $attendanceData = $this->attendanceService->getEmployeeAttendance($employeeId);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }

        return response()->json($attendanceData);
    }
}
