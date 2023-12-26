<?php

namespace Tests\Feature;

use App\Services\FileGroupService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FileGroupServiceTest extends TestCase
{
    public function testItGroupsFilesByOwners()
    {
        $fileGroupService = new FileGroupService();

        $files = [
            "insurance.txt" => "Company A",
            "letter.docx" => "Company A",
            "Contract.docx" => "Company B"
        ];

        $result = $fileGroupService->groupByOwners($files);

        $this->assertEquals([
            "Company A" => ["insurance.txt", "letter.docx"],
            "Company B" => ["Contract.docx"]
        ], $result);
    }
}
