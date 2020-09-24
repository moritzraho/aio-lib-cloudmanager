/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/*
 * THIS FILE IS GENERATED. DO NOT EDIT BY HAND. RUN 'npm run generate-jsdoc-types' to re-generate.
 * Manually created types should go in types.jsdoc.js
 */

/* eslint no-multiple-empty-lines: "off", no-trailing-spaces: "off" */


/**
 * A lightweight representation of a Program
 *
 * @typedef {object} EmbeddedProgram
 * @property {string} id - Identifier of the program. Unique within the space.
 * @property {string} name - Name of the program
 * @property {boolean} enabled - Whether this Program has been enabled for Cloud Manager usage
 * @property {string} tenantId - Tenant Id
 */


/**
 * A representation of a CI/CD Pipeline
 *
 * @typedef {object} Pipeline
 * @property {string} id - Identifier of the pipeline. Unique within the program.
 * @property {string} programId - Identifier of the program. Unique within the space.
 * @property {string} name - Name of the pipeline
 * @property {string} trigger - How should the execution be triggered. ON_COMMIT: each time a PR is available and the Pipeline is idle then a execution is triggered. MANUAL: triggerd through UI or API. SCHEDULE: recurring schedule (not yet implemented}
 * @property {string} status - Pipeline status
 * @property {string} createdAt - Create date
 * @property {string} updatedAt - Update date
 * @property {string} lastStartedAt - Last pipeline execution start
 * @property {string} lastFinishedAt - Last pipeline execution end
 * @property {PipelinePhase[]} phases - Pipeline phases in execution order
 */


/**
 * Describes a phase of a pipeline
 *
 * @typedef {object} PipelinePhase
 * @property {string} name - Name of the phase
 * @property {string} type - Type of the phase
 * @property {string} repositoryId - Identifier of the source repository. The code from this repository will be build at the start of this phase. 
Mandatory if type=BUILD
 * @property {string} branch - Name of the tracked branch or a fully qualified git tag (e.g. refs/tags/v1). 
 Assumed to be `master` if missing.
 * @property {string} environmentId - Identifier of the target environment. Mandatory if type=DEPLOY
 */


/**
 * A representation of an execution of a CI/CD Pipeline.
 *
 * @typedef {object} PipelineExecution
 * @property {string} id - Pipeline execution identifier
 * @property {string} programId - Identifier of the program. Unique within the space.
 * @property {string} pipelineId - Identifier of the pipeline. Unique within the space.
 * @property {string} artifactsVersion - Version of the artifacts generated during this execution
 * @property {string} user - AdobeID who started the pipeline. Empty for auto triggered builds
 * @property {string} status - Status of the execution
 * @property {string} trigger - How the execution was triggered.
 * @property {string} createdAt - Start time
 * @property {string} updatedAt - Date of last status change
 * @property {string} finishedAt - Date the execution reached a final state
 */


/**
 * @typedef {object} PipelineStepMetrics
 * @property {Metric[]} metrics - metrics
 */


/**
 * A representation of a specific metric generated by a CI/CD Pipeline step.
 *
 * @typedef {object} Metric
 * @property {string} id - KPI result identifier
 * @property {string} severity - Severity of the metric
 * @property {boolean} passed - Whether metric is considered passed
 * @property {boolean} override - Whether user override the failed metric
 * @property {string} actualValue - Expected value for the metric
 * @property {string} expectedValue - Expected value for the metric
 * @property {string} comparator - Comparator used for the metric
 * @property {string} kpi - KPI identifier
 */


/**
 * A representation of an Environment known to Cloud Manager.
 *
 * @typedef {object} Environment
 * @property {string} id - id
 * @property {string} programId - Identifier of the program. Unique within the space.
 * @property {string} name - Name of the environment
 * @property {string} description - Description of the environment
 * @property {string} type - Type of the environment
 * @property {LogOptionRepresentation[]} availableLogOptions - List of logs available in the environment
 */


/**
 * A named value than can be set on an Environment
 *
 * @typedef {object} Variable
 * @property {string} name - Name of the variable. Of a-z, A-Z, _ and 0-9 Cannot begin with a number.
 * @property {string} value - Value of the variable. Read-Write for non-secrets, write-only for secrets.
 * @property {string} type - Type of the variable. Default `string` if missing. `secretString` variables are encrypted at rest. Cannot be changed after creation.
 */


/**
 * @typedef {object} LogOptionRepresentation
 * @property {string} service - Name of the service in environment. Example: author
 * @property {string} name - Name of the log for service in environment. Example: aemerror
 */

