// Copyright 2024 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Jest config file.
 */

module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.puppeteer-acceptance-tests.json',
    },
  },
  testMatch: ['**/?(*.)+(spec).[t]s'],
  transform: {'^.+\\.ts?$': 'ts-jest'},
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 300000,
  bail: 0,
  transformIgnorePatterns: ['node_modules/(?!expect/)'],
  moduleNameMapper: {
    '^expect$': 'expect/build/index.js',
    '^expect/(.*)$': 'expect/$1',
  },
};
expect(await page.screenshot()).toMatchImageSnapshot({
  failureThreshold: 0.02,  // Allow 2% tolerance
  failureThresholdType: 'percent',  // In percentage
});
