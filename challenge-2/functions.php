<?php

function findDuplicates(array $arr): array
{
    $occurrences = [];
    $duplicates = [];

    for ($i = 0; $i < count($arr); $i++) {
        $currentNumber = $arr[$i];
        if (isset($occurrences[$currentNumber])) {
            $duplicates[] = $currentNumber;
        } else {
            $occurrences[$currentNumber] = 1;
        }
    }

    return $duplicates;
}
