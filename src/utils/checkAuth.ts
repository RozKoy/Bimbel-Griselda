import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage';

export default function checkAuth(arg: any): boolean {
    if (arg) {
        return true;
    }
    return false;
}
