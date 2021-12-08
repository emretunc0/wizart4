// ****************************************************************

const formData = [
  {
    id: "18e4a0f4-77bc-495d-8a51-c50903db2d6a",
    name: "PSB",
    description: "A cluster of hardware holding up an installation of PSB",
    identifiers: [
      {
        id: "433315f1-69b6-484c-9fc6-bb5fe634746c",
        name: "Cloud Name",
        path: "_source.fields.cloud_name",
        expectedValue: null,
        value: null,
        type: "device"
      },
      {
        id: "e5ec278b-f34f-45e9-bede-ca5139a64b11",
        name: "Cloud Type",
        path: "_source.fields.cloud_type",
        expectedValue: "PSB",
        value: null,
        type: "device"
      }
    ],
    controlPlaneDevices: [
      {
        id: "bbd23bdb-487a-4ca6-886e-24000af190be",
        name: "Node",
        description: null,
        offlineThreshold: 600000,
        deletedThreshold: 10,
        identifiers: [
          {
            id: "5468110a-151b-4b7d-a279-d2a8c363309a",
            name: "Hostname",
            path: "_source.beat.hostname",
            expectedValue: null,
            value: null,
            type: "system"
          }
        ],
        instances: [],
        metrics: [
          {
            id: "57cd9c14-5d17-4be1-938d-78e97db3f26d",
            name: "Temperature",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "rose_hardware_sensors_beat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.collectd_type:temperature AND data.type_instance:System Temp system_board (7.1)",
              groupBy: null
            },
            valuePath: "_source.data.values.0",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:01:13.461Z",
            thresholds: [
              {
                id: "03de0d5d-0fc4-48be-8745-05ee4c19bc46",
                comparisonType: "LESS_THAN",
                value: "-6",
                status: "ERROR"
              },
              {
                id: "8757b2e4-21ad-4b95-9f22-67f915ea3b5c",
                comparisonType: "GREATER_THAN",
                value: "90",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Temperature",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [90]
                  }
                },
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "or"
                  },
                  evaluator: {
                    type: "lt",
                    params: [-6]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "6324b221-3a12-4ad4-8f4d-6aaed3d852f8",
            name: "Memory Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "rose_node_status-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND metricset.name: memory",
              groupBy: null
            },
            valuePath: "_source.system.memory.actual.used.pct",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:00:13.791Z",
            thresholds: [
              {
                id: "3d30f923-fc9e-4c22-9f99-0d3ee047461c",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "841c9b3e-01cc-46f3-b876-92a060071723",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Memory Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "a982e26f-6624-4dab-ad94-b91ecdd9fa0c",
            name: "CEPH Disk Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "rose_node_status-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND metricset.module.keyword:ceph AND metricset.name.keyword: cluster_disk",
              groupBy: null
            },
            valuePath: "_source.ceph.cluster_disk.used.pct",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-18T23:00:55.339Z",
            thresholds: [
              {
                id: "cd725120-9a52-49af-908f-fb1fc09f7ecf",
                comparisonType: "GREATER_THAN",
                value: "75",
                status: "WARNING"
              },
              {
                id: "86675828-9bfe-4e6f-831a-1bdb4d762bda",
                comparisonType: "GREATER_THAN",
                value: "90",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "CEPH Disk Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [90]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "b24c2c20-2f1d-42b6-933d-06032c1b37f2",
            name: "Total CPU Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "rose_node_status-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND metricset.name: cpu",
              groupBy: null
            },
            valuePath:
              "_source.system.cpu.total.pct:divide({_source.system.cpu.cores})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:00:14.399Z",
            thresholds: [
              {
                id: "570ad5a1-b2d6-43db-8cea-bf2674dadc0d",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "f3d21285-11d1-4a50-b816-89c3b428f4a3",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Total CPU Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "5cb68024-2eb9-41ed-bee6-bc00e4295834",
            name: "Filesystem Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "metricbeat-*",
              luceneQuery:
                '@timestamp:[{{STARTTIME}} TO *] AND system.filesystem.mount_point.keyword:"/"',
              groupBy: null
            },
            valuePath: "_source.system.filesystem.used.pct",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-18T21:58:03.991Z",
            thresholds: [
              {
                id: "8b5995f8-22ab-4abe-b74f-e6df9db65271",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "f53c9df0-2cc7-4dab-a087-6fec0e42db8d",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Filesystem Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "25d729ca-e5fb-485f-a11c-5f91818a72ac",
            name: "Power Supply Status",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "rose_hardware_sensors_beat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.collectd_type:gauge AND data.type_instance:ipmi_psu_status",
              groupBy: null
            },
            valuePath: "_source.data.values.0",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:00:15.217Z",
            thresholds: [
              {
                id: "837a22cf-d6d7-4709-b453-b93070d1c95f",
                comparisonType: "GREATER_THAN",
                value: "0",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Power Supply Status",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "711ac2d1-0b6e-4704-b8cf-b3ed38c3d70d",
            name: "Fan Speed",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "rose_hardware_sensors_beat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.collectd_type:fanspeed AND data.type_instance:FAN*",
              groupBy: null
            },
            valuePath: "_source.data.values.0",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:00:15.773Z",
            thresholds: [
              {
                id: "9eaecc32-d560-46fc-becc-a51b48907aec",
                comparisonType: "LESS_THAN",
                value: "500",
                status: "ERROR"
              },
              {
                id: "5dfad3e1-8d56-42c8-92af-ea3f9c901955",
                comparisonType: "GREATER_THAN",
                value: "25000",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Fan Speed",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [25000]
                  }
                },
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "or"
                  },
                  evaluator: {
                    type: "lt",
                    params: [500]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "97be2aef-77f1-4f5a-b413-888788b85c8a",
            name: "Swap Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "rose_node_status-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND metricset.name: memory",
              groupBy: null
            },
            valuePath: "_source.system.memory.swap.used.pct",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:00:16.297Z",
            thresholds: [
              {
                id: "9ee390bd-9012-4930-a349-2f4b14357f6c",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "99e13167-ab5f-48f2-b17d-07957e4041c8",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Swap Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          }
        ]
      },
      {
        id: "1e0066e5-9207-42d9-a9e4-9c9f79d322a3",
        name: "Hypervisor",
        description: null,
        offlineThreshold: 600000,
        deletedThreshold: 10,
        identifiers: [
          {
            id: "82ed1fd1-e2d7-4bfa-83f2-b2ca37fd9dbe",
            name: "Hostname",
            path: "_source.beat.hostname",
            expectedValue: null,
            value: null,
            type: "system"
          }
        ],
        instances: [],
        metrics: [
          {
            id: "e73e1f8c-8c36-4453-b72f-6dd40eff2847",
            name: "Memory Allocation Percent",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "psbnfvi3_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:Openstack_Driver_Show_Hypervisor_Statistics",
              groupBy: null
            },
            valuePath:
              "_source.data.Openstack_Driver_Show_Hypervisor_Statistics.memory_mb_used:divide({_source.data.Openstack_Driver_Show_Hypervisor_Statistics.memory_mb})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-18T21:45:57.706Z",
            thresholds: [
              {
                id: "9acd3485-a342-4e36-987c-7c1b1318f208",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "b9b5549f-6c23-45dd-b168-bc974c9b1675",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Memory Allocation",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "3eccd089-ae98-4395-b292-d9a615e8a3f7",
            name: "Running VM Count",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "psbnfvi3_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:Openstack_Driver_Show_Hypervisor_Statistics",
              groupBy: "beat.hostname"
            },
            valuePath:
              "_source.data.Openstack_Driver_Show_Hypervisor_Statistics.running_vms",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [],
            alert: null,
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "STATE",
            handlerScript: null
          },
          {
            id: "4e893c05-a4fe-4ace-a33c-9d36ae36e004",
            name: "vCPU Allocation Percent",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "psbnfvi3_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:Openstack_Driver_Show_Hypervisor_Statistics",
              groupBy: null
            },
            valuePath:
              "_source.data.Openstack_Driver_Show_Hypervisor_Statistics.vcpus_used:divide({_source.data.Openstack_Driver_Show_Hypervisor_Statistics.vcpus})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-18T21:46:51.232Z",
            thresholds: [
              {
                id: "87f7ebf5-370c-4d5d-a487-d334eb21b6dc",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "a8a0b195-e334-493d-9c81-3a719635aadd",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "vCPU Allocation",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "606bed27-9793-446d-9ded-6d02044d50e4",
            name: "Storage Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "psbnfvi3_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:Openstack_Driver_Show_Hypervisor_Statistics",
              groupBy: null
            },
            valuePath:
              "_source.data.Openstack_Driver_Show_Hypervisor_Statistics.local_gb_used:divide({_source.data.Openstack_Driver_Show_Hypervisor_Statistics.local_gb})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-18T21:48:05.367Z",
            thresholds: [
              {
                id: "90a5dc66-1f33-4f43-89fa-82ebe36834d6",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "4f0bc569-1b42-499f-bd56-1f952317c769",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Storage Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          }
        ]
      }
    ],
    managedDevices: []
  },
  {
    id: "e51416cc-e3b2-43af-9926-448023caac38",
    name: "RoSE",
    description: "A cluster of hardware holding up an installation of RoSE",
    identifiers: [
      {
        id: "b2c09df4-e602-4f6c-aa73-eccef7c3b54a",
        name: "Cloud Name",
        path: "_source.fields.cloud_name",
        expectedValue: null,
        value: null,
        type: "device"
      },
      {
        id: "15fdc863-a5e2-40f5-b8fe-f86275a16aa0",
        name: "Cloud Type",
        path: "_source.fields.cloud_type",
        expectedValue: "RoSE",
        value: null,
        type: "device"
      }
    ],
    controlPlaneDevices: [
      {
        id: "b12e1830-262a-472b-afb9-100eec3865e7",
        name: "Node",
        description: null,
        offlineThreshold: 600000,
        deletedThreshold: 10,
        identifiers: [
          {
            id: "22e8cd85-c964-46b3-b57b-8b47790163c5",
            name: "Hostname",
            path: "_source.beat.hostname",
            expectedValue: null,
            value: null,
            type: "system"
          }
        ],
        instances: [],
        metrics: [
          {
            id: "e2310ca2-942b-4db7-8338-cd329cf10dfa",
            name: "Memory Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "rose_node_status-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND metricset.name: memory",
              groupBy: null
            },
            valuePath: "_source.system.memory.actual.used.pct",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:00:17.005Z",
            thresholds: [
              {
                id: "d451611f-d50f-4dae-ba88-c83406afb02f",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "ae65854f-8231-40c8-b887-5e66b9dbb80d",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Memory Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "056ae9e1-0219-4e44-8fbe-ff863ccec1ec",
            name: "CEPH Disk Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "rose_node_status-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND metricset.module.keyword:ceph AND metricset.name.keyword: cluster_disk",
              groupBy: null
            },
            valuePath: "_source.ceph.cluster_disk.used.pct",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "5fe434bc-5478-4f73-b7f7-77ebefd02a30",
                comparisonType: "GREATER_THAN",
                value: "75",
                status: "WARNING"
              },
              {
                id: "79502cc0-9bdf-44b1-8948-00b4eefc010a",
                comparisonType: "GREATER_THAN",
                value: "90",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "CEPH Disk Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [90]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "793bc2f3-650f-422b-9327-39c194395e89",
            name: "Total CPU Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "rose_node_status-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND metricset.name: cpu",
              groupBy: null
            },
            valuePath:
              "_source.system.cpu.total.pct:divide({_source.system.cpu.cores})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:00:17.668Z",
            thresholds: [
              {
                id: "6e4b29c1-ec90-415d-96d6-0bd73516539d",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "00177af6-8e8a-479a-80ec-6c142ae5a90c",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Total CPU Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "49218699-354d-4d76-91e5-0409b86e0032",
            name: "Power Supply Status",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "rose_hardware_sensors_beat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.collectd_type:gauge AND data.type_instance:ipmi_psu_status",
              groupBy: null
            },
            valuePath: "_source.data.values.0",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "a56b9a9d-6941-4221-ad40-bac628236060",
                comparisonType: "GREATER_THAN",
                value: "0",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Power Supply Status",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "c75e7e9d-dbfc-4c18-8081-369b71b82a7a",
            name: "Fan Speed",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "rose_hardware_sensors_beat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.collectd_type:fanspeed AND data.type_instance:FAN*",
              groupBy: null
            },
            valuePath: "_source.data.values.0",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "fe3a083a-bac0-4b7d-bf1a-31343f6ee548",
                comparisonType: "LESS_THAN",
                value: "500",
                status: "ERROR"
              },
              {
                id: "e38be5e6-baf2-42d8-aed6-1a45208a7925",
                comparisonType: "GREATER_THAN",
                value: "25000",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Fan Speed",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [25000]
                  }
                },
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "or"
                  },
                  evaluator: {
                    type: "lt",
                    params: [500]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "b9d80e72-888c-4b2e-b825-03a1618bb044",
            name: "Filesystem Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "metricbeat-*",
              luceneQuery:
                '@timestamp:[{{STARTTIME}} TO *] AND system.filesystem.mount_point.keyword:"/"',
              groupBy: null
            },
            valuePath: "_source.system.filesystem.used.pct",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:00:18.391Z",
            thresholds: [
              {
                id: "b082cbb4-8970-4fff-82e4-608468a23df2",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "d9de5ca5-377a-42a6-8b72-1a78224cc811",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Filesystem Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "bbaf0330-7322-4859-a4c1-82c6751c54ba",
            name: "Temperature",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "rose_hardware_sensors_beat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.collectd_type:temperature AND data.type_instance:System Temp system_board (7.1)",
              groupBy: null
            },
            valuePath: "_source.data.values.0",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "90cbd302-1005-4b12-80dc-2a7fab109eaa",
                comparisonType: "LESS_THAN",
                value: "-6",
                status: "ERROR"
              },
              {
                id: "e255b3e8-b8a7-4cad-8219-fa51aedbc094",
                comparisonType: "GREATER_THAN",
                value: "90",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Temperature",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [90]
                  }
                },
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "or"
                  },
                  evaluator: {
                    type: "lt",
                    params: [-6]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "ddd61518-7973-4046-a1f8-087fb49667a1",
            name: "Swap Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "rose_node_status-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND metricset.name: memory",
              groupBy: null
            },
            valuePath: "_source.system.memory.swap.used.pct",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2020-02-19T08:00:19.155Z",
            thresholds: [
              {
                id: "4a4ed67f-51f8-445c-8dee-8252dc18e3f9",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "0b906bae-415f-4b94-b54c-17812e8de135",
                comparisonType: "GREATER_THAN",
                value: "0.95",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Swap Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.95]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          }
        ]
      }
    ],
    managedDevices: []
  },
  {
    id: "07ec7545-da71-4919-82a7-3ab2207ef08c",
    name: "UCPE - C3906",
    description: "A Ciena 3906 backed UCPE system",
    identifiers: [
      {
        id: "46b3ec99-eed5-45d2-a8d1-6ac8297a1d09",
        name: "Cloud Type",
        path: "_source.fields.cloud_type",
        expectedValue: "UCPE",
        value: null,
        type: "device"
      },
      {
        id: "184488d9-d622-4ad1-b78a-7bf0f26ad218",
        name: "Cloud Sub-Type",
        path: "_source.fields.cloud_subtype",
        expectedValue: "ciena3906",
        value: null,
        type: "device"
      },
      {
        id: "f0cff222-2fe8-48e9-9668-a2fcf7bf5aea",
        name: "Cloud Name",
        path: "_source.fields.cloud_name",
        expectedValue: null,
        value: null,
        type: "device"
      }
    ],
    controlPlaneDevices: [
      {
        id: "96735612-c276-4bfd-8002-1c471f84b1e7",
        name: "Field Replacable Unit (FRU)",
        description: null,
        offlineThreshold: 600000,
        deletedThreshold: 10,
        identifiers: [
          {
            id: "eb77f0f5-b762-4c3a-b5ed-cc4741531615",
            name: "UCPE ID",
            path: "_source.customerData.ucpeId",
            expectedValue: null,
            value: null,
            type: "system"
          }
        ],
        instances: [],
        metrics: [
          {
            id: "90141626-b1f5-4f54-9cfe-49ded426b293",
            name: "Disk Size",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:system_state",
              groupBy: null
            },
            valuePath: "_source.data.system_state.disk.total",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [],
            alert: null,
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "3f567f6d-f14e-4993-8dac-c5865f4253ef",
            name: "VM Count",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery: "@timestamp:[{{STARTTIME}} TO *] AND data.key:sfs",
              groupBy: null
            },
            valuePath: "_source.data.sfs.sf[*]:arraySize",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [],
            alert: null,
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "726b7d1d-4cab-47b6-848f-fa65700af36c",
            name: "CPU Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:system_state",
              groupBy: null
            },
            valuePath:
              ":subtract(100, {_source.data.system_state.cpu_percent.cpu_idle}):divide(100)",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "2a63a503-8e3a-48a3-ad46-b833bece4cbb",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "71f81de9-970a-41ef-88ba-1159e2bfe9ca",
                comparisonType: "GREATER_THAN",
                value: "0.9",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "CPU Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.9]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "eee3e707-9c01-486a-a7bc-81cac1d5cc25",
            name: "CPU Count",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:system_state",
              groupBy: null
            },
            valuePath: "_source.data.system_state.sys_info.physical_core_count",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [],
            alert: null,
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "8c6ec7f8-eba1-448d-8c73-4a6e92f4ea60",
            name: "Disk Allocation",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery: "@timestamp:[{{STARTTIME}} TO *] AND data.key:nfvi",
              groupBy: null
            },
            valuePath:
              "_source.data.nfvi.nfvi_state.disk_available:divide({_source.data.nfvi.nfvi_state.disk_total})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "1b41aa36-db85-4620-adf8-20b92f275b10",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "61957be2-10a5-491f-8f51-9c10e4cfe417",
                comparisonType: "GREATER_THAN",
                value: "0.9",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Disk Allocation",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.9]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "06713a1c-663c-443e-ade5-888a16ac3dd9",
            name: "Memory Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:system_state",
              groupBy: null
            },
            valuePath:
              "_source.data.system_state.memory.used_percent:divide(100)",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "19a2573f-0a24-45a3-8d64-fdb213dd4b55",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "8f8f87ab-7dbe-4502-a721-91bb6734385e",
                comparisonType: "GREATER_THAN",
                value: "0.9",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Memory Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.9]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "17c418b5-5a88-4f8a-a2b9-e11220069d1c",
            name: "Memory Allocation",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery: "@timestamp:[{{STARTTIME}} TO *] AND data.key:nfvi",
              groupBy: null
            },
            valuePath:
              "_source.data.nfvi.nfvi_state.mem_available:divide({_source.data.nfvi.nfvi_state.mem_total})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "04788ec0-df77-4473-aec6-f66b48890c92",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "91987264-98cb-4725-9931-c5a14e49ba48",
                comparisonType: "GREATER_THAN",
                value: "0.9",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Memory Allocation",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.9]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "9abb9e3e-8119-4dea-b279-6661d3ab8fcd",
            name: "Network Interface Count",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:interface",
              groupBy: null
            },
            valuePath: "_source.data.interfaces.interface[*]:arraySize",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [],
            alert: null,
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "9c02f105-74dd-4d95-b2e7-91e78b900119",
            name: "Memory Size",
            description: null,
            dataType: "DECIMAL",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:system_state",
              groupBy: null
            },
            valuePath: "_source.data.system_state.memory.total",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [],
            alert: null,
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "e26683b3-384e-4ed9-8954-29ded708e243",
            name: "CPU Allocation",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery: "@timestamp:[{{STARTTIME}} TO *] AND data.key:nfvi",
              groupBy: null
            },
            valuePath:
              "_source.data.nfvi.nfvi_state.cpu_available:divide({_source.data.nfvi.nfvi_state.cpu_total})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "6de6b9f7-45db-4765-92e0-e90fdd4f9d1f",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "0a144d7a-19f5-48d4-bdf7-08d29bc73bd1",
                comparisonType: "GREATER_THAN",
                value: "0.99",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "CPU Allocation",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.99]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "21641e75-e2cb-4fab-8c91-393c4c714b5d",
            name: "Disk Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "ciena3906_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.key:system_state",
              groupBy: null
            },
            valuePath: "_source.data.system_state.disk.percentage:divide(100)",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "c3b6f2b3-3ac5-4fcc-a370-0faa0198c047",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "3c3ffbcd-3a96-4ce6-be9c-d270e2b15c6b",
                comparisonType: "GREATER_THAN",
                value: "0.9",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Disk Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.9]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          }
        ]
      }
    ],
    managedDevices: [
      {
        id: "64cde89e-6f19-4c67-8b1b-601ebfbef0c7",
        name: "Versa VFLEX VNF",
        description: null,
        offlineThreshold: 600000,
        deletedThreshold: 10,
        identifiers: [
          {
            id: "50ce4ab6-ba42-4f10-bc4c-961ce3cd01a8",
            name: "VNF ID",
            path: "_source.customerData.vnfId",
            expectedValue: null,
            value: null,
            type: "system"
          }
        ],
        instances: [],
        metrics: [
          {
            id: "e5bfba4a-921c-4a78-802d-ca280fc8f11f",
            name: "Memory Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "versavflex_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.system_system.details:*",
              groupBy: null
            },
            valuePath:
              "_source.data.system_system.details.0.free-memory:divide({_source.data.system_system.details.0.memory})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "0ce40f04-dadc-4098-b9ab-4f096e34865b",
                comparisonType: "GREATER_THAN",
                value: "0.8",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Memory Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.8]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          },
          {
            id: "619cce2d-559f-4e82-9316-0978c00e516c",
            name: "Disk Utilization",
            description: null,
            dataType: "PERCENT",
            query: {
              index: "versavflex_rose_agentbeat-*",
              luceneQuery:
                "@timestamp:[{{STARTTIME}} TO *] AND data.system_system.details:*",
              groupBy: null
            },
            valuePath:
              "_source.data.system_system.details.0.free-disk:divide({_source.data.system_system.details.0.disk})",
            timestampPath: "_source.@timestamp",
            lastUpdated: "2000-07-23T15:02:19.637Z",
            thresholds: [
              {
                id: "f27aac93-6d36-4299-8cb3-78274376d6e5",
                comparisonType: "GREATER_THAN",
                value: "0.75",
                status: "WARNING"
              },
              {
                id: "64b6fc01-b71f-42fc-89e0-63e5c45f2ddb",
                comparisonType: "GREATER_THAN",
                value: "0.9",
                status: "ERROR"
              }
            ],
            alert: {
              for: "3m",
              name: "Disk Utilization",
              handler: 1,
              frequency: "1m",
              conditions: [
                {
                  type: "query",
                  query: {
                    params: ["A", "3m", "now"]
                  },
                  reducer: {
                    type: "avg",
                    params: []
                  },
                  operator: {
                    type: "and"
                  },
                  evaluator: {
                    type: "gt",
                    params: [0.9]
                  }
                }
              ],
              noDataState: "keep_state",
              alertRuleTags: {},
              notifications: [],
              executionErrorState: "alerting"
            },
            notifications: [],
            valueType: "NUMERIC",
            handlerType: "TIME_SERIES",
            handlerScript: null
          }
        ]
      }
    ]
  }
];

export { formData };
