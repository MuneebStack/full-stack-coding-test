<?php

namespace App\Imports;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class EmployeeImport implements ToModel, WithHeadingRow, WithValidation
{
    public function model(array $row): Model|null
    {
        return new Employee([
            'id' => $row['id'],
            'name' => $row['name'],
            'email' => $row['email']
        ]);
    }

    public function rules(): array
    {
        return [
            'id' => 'required',
            'name' => 'required',
            'email' => [
                'required',
                'email',
                Rule::unique('employees', 'email')
            ]
        ];
    }
}
