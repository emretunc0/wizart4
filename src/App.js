import React, { useState } from "react";
import Form from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FaEdit, FaRegWindowClose } from "react-icons/fa";
import { formData as formDataTop } from "./FormData";

const schema = {
  definitions: {
    identifier: {
      type: "object",
      properties: {
        id: {
          type: "string"
        },
        name: {
          type: "string"
        },
        path: {
          type: "string"
        },
        expectedValue: {
          type: "string"
        },
        value: {
          type: "string"
        },
        type: {
          type: "string"
        }
      }
    },
    innerDevice: {
      type: "object",
      properties: {
        id: {
          type: "string"
        },
        name: {
          type: "string"
        },
        description: {
          type: "string"
        },
        offlineThreshold: {
          type: "number"
        },
        deletedThreshold: {
          type: "number"
        },
        identifiers: {
          type: "array",
          items: {
            $ref: "#/definitions/identifier"
          }
        },
        metrics: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "string"
              },
              name: {
                type: "string"
              },
              description: {
                type: "string"
              },
              dataType: {
                type: "string"
              },
              query: {
                type: "object",
                properties: {
                  index: {
                    type: "string"
                  },
                  luceneQuery: {
                    type: "string"
                  },
                  groupBy: {
                    type: "string"
                  }
                }
              },
              valuePath: {
                type: "string"
              },
              timestampPath: {
                type: "string"
              },
              lastUpdated: {
                type: "string"
              },
              thresholds: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string"
                    },
                    comparisonType: {
                      type: "string"
                    },
                    value: {
                      type: "string"
                    },
                    status: {
                      type: "string"
                    }
                  }
                }
              },
              alert: {
                type: "object",
                properties: {
                  for: {
                    type: "string"
                  },
                  name: {
                    type: "string"
                  },
                  handler: {
                    type: "string"
                  },
                  frequency: {
                    type: "string"
                  },
                  conditions: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: {
                          type: "string"
                        },
                        query: {
                          type: "object",
                          properties: {
                            params: {
                              type: "array",
                              items: {
                                type: "string"
                              }
                            }
                          }
                        },
                        reducer: {
                          type: "object",
                          properties: {
                            type: {
                              type: "string"
                            },
                            params: {
                              type: "array",
                              items: {
                                type: "string"
                              }
                            }
                          }
                        },
                        operator: {
                          type: "object",
                          properties: {
                            type: {
                              type: "string"
                            }
                          }
                        },
                        evaluator: {
                          type: "object",
                          properties: {
                            type: {
                              type: "string"
                            },
                            params: {
                              type: "array",
                              items: {
                                type: "string"
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  noDataState: {
                    type: "string"
                  },
                  alertRuleTags: {
                    type: "object"
                  },
                  notifications: {
                    type: "array",
                    items: {
                      type: "string"
                    }
                  },
                  executionErrorState: {
                    type: "string"
                  }
                }
              },
              notifications: {
                type: "array",
                items: {
                  type: "string"
                }
              },
              valueType: {
                type: "string"
              },
              handlerType: {
                type: "string"
              },
              handlerScript: {
                type: "string"
              }
            }
          }
        }
      }
    },
    device: {
      type: "object",
      properties: {
        id: {
          type: "string"
        },
        name: {
          type: "string"
        },
        description: {
          type: "string"
        },
        identifiers: {
          type: "array",
          items: {
            $ref: "#/definitions/identifier"
          }
        },
        controlPlaneDevices: {
          type: "array",
          items: {
            $ref: "#/definitions/innerDevice"
          }
        },
        managedDevices: {
          type: "array",
          items: {
            $ref: "#/definitions/innerDevice"
          }
        }
      }
    }
  },
  title: "A registration form",
  description:
    "A simple form example. Uses example data from the react-jsonschema-form live playground.",
  type: "object",
  properties: {
    managedDevice: {
      title: "Managed Device",
      $ref: "#/definitions/device"
    }
  }
};
const PageState_MonitoredSystems = "MonitoredSystems";
const PageState_MonitoredSystem = "MonitoredSystem";
const PageState_Metrics = "Metrics";

const ButtonType_MonitoredSystems = "MonitoredSystems";

const monitoredSystemSchema = {
  title: "Device Profile Editor",
  description: "Monitored System",
  buttonType: "monitoredSystem",
  type: "object",
  properties: {
    id: {
      type: "string"
    },
    name: {
      type: "string"
    },
    description: {
      type: "string"
    },
    identifiers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            title: " "
          }
        }
      }
    },
    controlPlaneDevices: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            title: " "
          }
        }
      }
    },
    managedDevices: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            title: " "
          }
        }
      }
    }
  }
};

const metricsSchema = {
  title: "Metrics Editor",
  //description: "Monitored Systems",
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "string"
      },
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      dataType: {
        type: "string"
      },
      query: {
        type: "object",
        properties: {
          index: {
            type: "string"
          },
          luceneQuery: {
            type: "string"
          },
          groupBy: {
            type: "string"
          }
        }
      },
      valuePath: {
        type: "string"
      },
      timestampPath: {
        type: "string"
      },
      lastUpdated: {
        type: "string"
      },
      thresholds: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "string"
            },
            comparisonType: {
              type: "string"
            },
            value: {
              type: "string"
            },
            status: {
              type: "string"
            }
          }
        }
      },
      valueType: {
        type: "string"
      },
      handlerType: {
        type: "string"
      },
      handlerScript: {
        type: "string"
      }
    }
  }
};

const monitoredSystemsSchema = {
  title: "Device Profile Editor",
  description: "Monitored Systems",
  type: "array",
  items: {
    buttonType: ButtonType_MonitoredSystems,
    type: "object",
    properties: {
      name: {
        type: "string",
        title: " "
      }
    }
  }
};

export default function App() {
  // state hooks here
  // const [breadcrumb, setBreadcrumb] = useState("Monitored Systems");
  // const [page, setpage] = useState(PageState_MonitoredSystems);
  // const [schema, setSchema] = useState(monitoredSystemsSchema);
  // const [formData, setFormData] = useState(formDataTop);

  const [breadcrumb, setBreadcrumb] = useState("Metrics");
  const [page, setpage] = useState(PageState_Metrics);
  const [schema, setSchema] = useState(metricsSchema);
  const [formData, setFormData] = useState(
    formDataTop[0].controlPlaneDevices[0].metrics
  );

  const onEditButtonClick = event => {
    const index = event.currentTarget.id;
    const buttonType = event.currentTarget.value;
    console.log("Button Clicked: " + buttonType + ": " + index);
    console.log(formData[index]);
    setFormData(formData[index]);
    setSchema(monitoredSystemSchema);
    setBreadcrumb("Monitored Systems / " + formData[index].name);
    setpage(PageState_MonitoredSystem);
  };

  var onSubmit = ({ formData }) => {
    console.log(formData);
  };

  const log = type => console.log.bind(console, type);

  return (
    <div>
      <p>{breadcrumb}</p>
      <hr />
      <Form
        schema={schema}
        //        ArrayFieldTemplate={ArrayFieldTemplate}
        formData={formData}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
      />
    </div>
  );
}
